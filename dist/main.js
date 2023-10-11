/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    /* --darkblue: #073B4c;
    background-color: var(--darkblue); */
} 
* {
    margin:0px;
    padding:0px;
}

.boards {
    display: grid;
    grid-auto-flow: column;
}
.playerSide, .aiSide {
    text-align: center;
}
.playerBoard, .aiBoard{
    margin: 0 auto;
    display:grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
    column-gap:0px;
    width: 45vw;
    height: 45vw;
}
.playerBoardCell, .aiBoardCell {
    height:auto;
    width:auto;
    border: 1px black solid;
}
.playerBoardCell.ship {
    background-color: blue;
}
.aiBoardCell.ship{
    background-color: rgb(168, 168, 245);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;wCACoC;AACxC;AACA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,YAAY;IACZ,wEAAwE;IACxE,qEAAqE;IACrE,cAAc;IACd,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,oCAAoC;AACxC","sourcesContent":[":root {\n    /* --darkblue: #073B4c;\n    background-color: var(--darkblue); */\n} \n* {\n    margin:0px;\n    padding:0px;\n}\n\n.boards {\n    display: grid;\n    grid-auto-flow: column;\n}\n.playerSide, .aiSide {\n    text-align: center;\n}\n.playerBoard, .aiBoard{\n    margin: 0 auto;\n    display:grid;\n    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;\n    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;\n    column-gap:0px;\n    width: 45vw;\n    height: 45vw;\n}\n.playerBoardCell, .aiBoardCell {\n    height:auto;\n    width:auto;\n    border: 1px black solid;\n}\n.playerBoardCell.ship {\n    background-color: blue;\n}\n.aiBoardCell.ship{\n    background-color: rgb(168, 168, 245);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


class AI extends _player__WEBPACK_IMPORTED_MODULE_0__.Player {
  constructor(name, enemyPlayer, enemyBoard) {
    super(name, enemyPlayer);
    this.turn = true;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.aiAttackArray = [];
  }

  randomAttack() {
    if (this.checkTurn()) {
      let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      let x = arrayX[Math.floor(Math.random() * 10)];
      let y = arrayY[Math.floor(Math.random() * 10)];
      let attackXY = x + y;
      if (this.aiAttackArray.indexOf(attackXY) != -1) {
        randomAttack();
      } else {
        this.aiAttackArray.push(attackXY);
        return attackXY;
      }
    }
  }
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


class Gameboard {
  constructor() {
    this.board = this.buildBoard();
    // this.allShipCoordinates = [];
    this.missedAttackArray = [];
    this.shipArray = [];
  }
  buildBoard() {
    let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let boardArray = [];
    for (let i = 0; i < arrayY.length; i++) {
      for (let j = 0; j < arrayX.length; j++) {
        boardArray.push(arrayX[j] + arrayY[i]);
      }
    }
    this.board = boardArray;
    return this.board;
  }
  getBoardArray() {
    return this.board;
  }
  checkShipPlacement(coordinateX, coordinateY, length, alignment) {
    let coordinatesXY = coordinateX + coordinateY;
    let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let coordinateArray = [coordinatesXY];
    // alignment: horizontal = 0, vertical = 1
    if (alignment == 0) {
      for (let i = 1; i < length; i++) {
        let newX = arrayX[arrayX.indexOf(coordinateX) + i];
        coordinateArray.push(newX + coordinateY);
        // console.log(coordinateArray);
      }
    } else if (alignment == 1) {
      for (let i = 1; i < length; i++) {
        let newY = arrayY[arrayY.indexOf(coordinateY) + i];
        coordinateArray.push(coordinateX + newY);
        // console.log(coordinateArray);
      }
    }
    for (let i = 0; i < this.shipArray.length; i++) {
      // console.log(this.shipArray.length);
      for (let j = 0; j < coordinateArray.length; j++) {
        if (this.shipArray[i].coordinates.indexOf(coordinateArray[j]) != -1) {
          return false;
        }
      }
    }
    if (alignment === 0) {
      let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      if (arrayX.indexOf(coordinateX) > 10 - length) {
        return false;
      }
    } else if (alignment === 1) {
      let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      if (arrayY.indexOf(coordinateY) > 10 - length) {
        return false;
      }
    }
    return true;
  }
  placeShip(coordinateXY, name, alignment) {
    // alignment: horizontal = 0, vertical = 1
    if (alignment === 1) {
      name.coordinates.push(coordinateXY);
      for (let i = 1; i < name.shipLength; i++) {
        let coordinateX = coordinateXY[0];
        let coordinateY = coordinateXY[1];
        let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let indexY = arrayY.indexOf(coordinateY);
        let newCoordinateY = arrayY[indexY + i];
        name.coordinates.push(coordinateX + newCoordinateY);
      }
    } else if (alignment === 0) {
      name.coordinates.push(coordinateXY);
      for (let i = 1; i < name.shipLength; i++) {
        let coordinateX = coordinateXY.substring(0, 1);
        let coordinateY = coordinateXY.substring(1, 3);
        let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        let indexX = arrayX.indexOf(coordinateX);
        let newCoordinateX = arrayX[indexX + i];
        name.coordinates.push(newCoordinateX + coordinateY);
      }
    }
    // for (let i = 0; i < newShip.coordinates.length; i++) {
    //   this.allShipCoordinates.push(newShip.coordinates[i]);
    // }
    this.shipArray.push(name);
    return name;
  }
  receiveAttack(attackCoordinates) {
    if (this.missedAttackArray.indexOf(attackCoordinates) != -1) {
      return console.log("already guessed");
    } else {
      for (let i = 0; i < this.shipArray.length; i++) {
        if (this.shipArray[i].coordinates.indexOf(attackCoordinates) != -1) {
          console.log("logging hit:" + attackCoordinates);
          return console.log(this.shipArray[i].hitCount());
        }
      }
      console.log("logging miss:" + attackCoordinates);
      return this.missedAttackArray.push(attackCoordinates);
    }
  }
  allSunk() {
    let allSunkShips = true;
    this.shipArray.forEach((ship) => {
      if (ship.isSunk === false) {
        allSunkShips = false;
      }
    });
    return allSunkShips;
  }
}




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
// import { Gameboard } from "./gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
  }
  checkTurn() {
    return this.turn;
  }
  endTurn(enemyPlayer) {
    if (this.turn == true) {
      this.turn = false;
    }
  }

  attack(coordinatesXY, enemyPlayer, enemyBoard) {
    if (this.checkturn()) {
      enemyBoard.receiveAttack(coordinatesXY);
      this.endTurn(enemyPlayer);
    }
  }
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  //Builds ship objects that include their length, number of hits,
  //and whether they have been sunk
  // hit() function to increase # of 'hits' in the ship
  // isSunk() calculates based on length and # of hits
  constructor(length) {
    this.shipLength = length;
    this.hits = 0;
    this.isSunk = false;
    this.coordinates = [];
  }
  hitCount() {
    this.hits += 1;
    if (this.hits >= this.shipLength) {
      this.isSunk = true;
    }
    return this.isSunk;
  }
}




/***/ })

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai */ "./src/ai.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//Player Ships
let carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5);
let battleship = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4);
let destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
let submarine = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
let patrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2);
//AI Ships
let carrierAI = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5);
let battleshipAI = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4);
let destroyerAI = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
let submarineAI = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
let patrolBoatAI = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2);
//Gameboards
let playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
let aiBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
//Players
let player = new _player__WEBPACK_IMPORTED_MODULE_2__.Player("Chad");
let ai = new _ai__WEBPACK_IMPORTED_MODULE_3__.AI("AI", player, playerBoard);
//Test ship placements - Player

let playerBoardHTML = document.querySelector(".playerBoard");
let aiBoardHTML = document.querySelector(".aiBoard");
// console.log(playerBoard.getBoardArray());

createBoard("playerBoard");
createBoard("aiBoard");

//Player random ship placement
randomShipPlacement(carrier, playerBoard);
randomShipPlacement(battleship, playerBoard);
randomShipPlacement(destroyer, playerBoard);
randomShipPlacement(submarine, playerBoard);
randomShipPlacement(patrolBoat, playerBoard);
//AI random ship placement
randomShipPlacement(carrierAI, aiBoard);
randomShipPlacement(battleshipAI, aiBoard);
randomShipPlacement(destroyerAI, aiBoard);
randomShipPlacement(submarineAI, aiBoard);
randomShipPlacement(patrolBoatAI, aiBoard);

function createBoard(boardName) {
  let boardNameHTML = document.querySelector(`.${boardName}`);
  let cellBoardClass = boardName + "Cell";
  for (let i = 0; i < playerBoard.getBoardArray().length; i++) {
    let cell = document.createElement("div");
    cell.classList.add(cellBoardClass);
    let cellClass = playerBoard.getBoardArray()[i];
    cell.classList.add(cellClass);
    if (boardName == "aiBoard") {
      cell.addEventListener("click", (e) => {
        attackEvent(e.target);
      });
    } else if (boardName == "playerBoard") {
      //add ship placement event listener's here
    }
    boardNameHTML.appendChild(cell);
  }
}
function randomShipPlacement(shipName, boardName) {
  let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let placementCoordinates =
    arrayX[Math.floor(Math.random() * 10)] +
    arrayY[Math.floor(Math.random() * 10)];
  // console.log("Checking:" + placementCoordinates);
  let alignment = Math.floor(Math.random() * 2);
  if (
    boardName.checkShipPlacement(
      placementCoordinates.substring(0, 1),
      placementCoordinates.substring(1, 3),
      shipName.shipLength,
      alignment
    )
  ) {
    boardName.placeShip(placementCoordinates, shipName, alignment);
    for (let i = 0; i < shipName.shipLength; i++) {
      // let shipCell = document.querySelector(
      //   `.${boardName}.${shipName.coordinates[i]}`
      // );
      let shipCell = shipName.coordinates[i];
      if (boardName == playerBoard) {
        let shipCellHTML = document.querySelector(
          `.playerBoardCell.${shipCell}`
        );
        // console.log(shipCellHTML);
        shipCellHTML.classList.add("ship");
      } else if (boardName == aiBoard) {
        let shipCellHTML = document.querySelector(`.aiBoardCell.${shipCell}`);
        // console.log(shipCellHTML);
        shipCellHTML.classList.add("ship");
      }
    }
  } else randomShipPlacement(shipName, boardName);
}

function attackEvent(element) {
  console.log("player attack:" + element.classList[1]); // "F5"
  aiBoard.receiveAttack(element.classList[1]);
}

// module.exports = {
//   Ship: Ship,
//   Gameboard: Gameboard,
//   Player: Player,
//   AI: AI,
// };

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGlDQUFpQyw2QkFBNkIseUNBQXlDLE1BQU0sS0FBSyxpQkFBaUIsa0JBQWtCLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLEdBQUcsd0JBQXdCLHlCQUF5QixHQUFHLHlCQUF5QixxQkFBcUIsbUJBQW1CLCtFQUErRSw0RUFBNEUscUJBQXFCLGtCQUFrQixtQkFBbUIsR0FBRyxrQ0FBa0Msa0JBQWtCLGlCQUFpQiw4QkFBOEIsR0FBRyx5QkFBeUIsNkJBQTZCLEdBQUcsb0JBQW9CLDJDQUEyQyxHQUFHLG1CQUFtQjtBQUNyb0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNia0M7O0FBRWxDLGlCQUFpQiwyQ0FBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVjOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJnQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkMsc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7QUN0SHJCLFlBQVksWUFBWTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7OztVQ3BCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDVjtBQUNJO0FBQ1I7QUFDUTs7QUFFbEM7QUFDQSxrQkFBa0IsdUNBQUk7QUFDdEIscUJBQXFCLHVDQUFJO0FBQ3pCLG9CQUFvQix1Q0FBSTtBQUN4QixvQkFBb0IsdUNBQUk7QUFDeEIscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCLHVCQUF1Qix1Q0FBSTtBQUMzQixzQkFBc0IsdUNBQUk7QUFDMUIsc0JBQXNCLHVDQUFJO0FBQzFCLHVCQUF1Qix1Q0FBSTtBQUMzQjtBQUNBLHNCQUFzQixpREFBUztBQUMvQixrQkFBa0IsaURBQVM7QUFDM0I7QUFDQSxpQkFBaUIsMkNBQU07QUFDdkIsYUFBYSxtQ0FBRTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0Esa0JBQWtCLHdDQUF3QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0EsZUFBZSxVQUFVLEdBQUcsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGtFQUFrRSxTQUFTO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLyogLS1kYXJrYmx1ZTogIzA3M0I0YztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7ICovXG59IFxuKiB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbn1cblxuLmJvYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuLnBsYXllclNpZGUsIC5haVNpZGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGF5ZXJCb2FyZCwgLmFpQm9hcmR7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgY29sdW1uLWdhcDowcHg7XG4gICAgd2lkdGg6IDQ1dnc7XG4gICAgaGVpZ2h0OiA0NXZ3O1xufVxuLnBsYXllckJvYXJkQ2VsbCwgLmFpQm9hcmRDZWxsIHtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICB3aWR0aDphdXRvO1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xufVxuLnBsYXllckJvYXJkQ2VsbC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLmFpQm9hcmRDZWxsLnNoaXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAyNDUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO3dDQUNvQztBQUN4QztBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix3RUFBd0U7SUFDeEUscUVBQXFFO0lBQ3JFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLyogLS1kYXJrYmx1ZTogIzA3M0I0YztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpOyAqL1xcbn0gXFxuKiB7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuLnBsYXllclNpZGUsIC5haVNpZGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXJCb2FyZCwgLmFpQm9hcmR7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBjb2x1bW4tZ2FwOjBweDtcXG4gICAgd2lkdGg6IDQ1dnc7XFxuICAgIGhlaWdodDogNDV2dztcXG59XFxuLnBsYXllckJvYXJkQ2VsbCwgLmFpQm9hcmRDZWxsIHtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIHdpZHRoOmF1dG87XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG4ucGxheWVyQm9hcmRDZWxsLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4uYWlCb2FyZENlbGwuc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAyNDUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW5lbXlQbGF5ZXIsIGVuZW15Qm9hcmQpIHtcbiAgICBzdXBlcihuYW1lLCBlbmVteVBsYXllcik7XG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgICB0aGlzLmVuZW15UGxheWVyID0gZW5lbXlQbGF5ZXI7XG4gICAgdGhpcy5lbmVteUJvYXJkID0gZW5lbXlCb2FyZDtcbiAgICB0aGlzLmFpQXR0YWNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjaygpIHtcbiAgICBpZiAodGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgICBsZXQgeCA9IGFycmF5WFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgbGV0IHkgPSBhcnJheVlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgIGxldCBhdHRhY2tYWSA9IHggKyB5O1xuICAgICAgaWYgKHRoaXMuYWlBdHRhY2tBcnJheS5pbmRleE9mKGF0dGFja1hZKSAhPSAtMSkge1xuICAgICAgICByYW5kb21BdHRhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWlBdHRhY2tBcnJheS5wdXNoKGF0dGFja1hZKTtcbiAgICAgICAgcmV0dXJuIGF0dGFja1hZO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBBSSB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuYnVpbGRCb2FyZCgpO1xuICAgIC8vIHRoaXMuYWxsU2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgdGhpcy5taXNzZWRBdHRhY2tBcnJheSA9IFtdO1xuICAgIHRoaXMuc2hpcEFycmF5ID0gW107XG4gIH1cbiAgYnVpbGRCb2FyZCgpIHtcbiAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgbGV0IGJvYXJkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5WS5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYm9hcmRBcnJheS5wdXNoKGFycmF5WFtqXSArIGFycmF5WVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBib2FyZEFycmF5O1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIGdldEJvYXJkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgY2hlY2tTaGlwUGxhY2VtZW50KGNvb3JkaW5hdGVYLCBjb29yZGluYXRlWSwgbGVuZ3RoLCBhbGlnbm1lbnQpIHtcbiAgICBsZXQgY29vcmRpbmF0ZXNYWSA9IGNvb3JkaW5hdGVYICsgY29vcmRpbmF0ZVk7XG4gICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgbGV0IGFycmF5WSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdO1xuICAgIGxldCBjb29yZGluYXRlQXJyYXkgPSBbY29vcmRpbmF0ZXNYWV07XG4gICAgLy8gYWxpZ25tZW50OiBob3Jpem9udGFsID0gMCwgdmVydGljYWwgPSAxXG4gICAgaWYgKGFsaWdubWVudCA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdYID0gYXJyYXlYW2FycmF5WC5pbmRleE9mKGNvb3JkaW5hdGVYKSArIGldO1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChuZXdYICsgY29vcmRpbmF0ZVkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlQXJyYXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld1kgPSBhcnJheVlbYXJyYXlZLmluZGV4T2YoY29vcmRpbmF0ZVkpICsgaV07XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGVYICsgbmV3WSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2hpcEFycmF5Lmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3JkaW5hdGVBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5zaGlwQXJyYXlbaV0uY29vcmRpbmF0ZXMuaW5kZXhPZihjb29yZGluYXRlQXJyYXlbal0pICE9IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhbGlnbm1lbnQgPT09IDApIHtcbiAgICAgIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgICAgaWYgKGFycmF5WC5pbmRleE9mKGNvb3JkaW5hdGVYKSA+IDEwIC0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gMSkge1xuICAgICAgbGV0IGFycmF5WSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdO1xuICAgICAgaWYgKGFycmF5WS5pbmRleE9mKGNvb3JkaW5hdGVZKSA+IDEwIC0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVYWSwgbmFtZSwgYWxpZ25tZW50KSB7XG4gICAgLy8gYWxpZ25tZW50OiBob3Jpem9udGFsID0gMCwgdmVydGljYWwgPSAxXG4gICAgaWYgKGFsaWdubWVudCA9PT0gMSkge1xuICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVYWSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5hbWUuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlWCA9IGNvb3JkaW5hdGVYWVswXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVZID0gY29vcmRpbmF0ZVhZWzFdO1xuICAgICAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgICAgIGxldCBpbmRleFkgPSBhcnJheVkuaW5kZXhPZihjb29yZGluYXRlWSk7XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlWSA9IGFycmF5WVtpbmRleFkgKyBpXTtcbiAgICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVYICsgbmV3Q29vcmRpbmF0ZVkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAwKSB7XG4gICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZVhZKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbmFtZS5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVYID0gY29vcmRpbmF0ZVhZLnN1YnN0cmluZygwLCAxKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVZID0gY29vcmRpbmF0ZVhZLnN1YnN0cmluZygxLCAzKTtcbiAgICAgICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICAgIGxldCBpbmRleFggPSBhcnJheVguaW5kZXhPZihjb29yZGluYXRlWCk7XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlWCA9IGFycmF5WFtpbmRleFggKyBpXTtcbiAgICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKG5ld0Nvb3JkaW5hdGVYICsgY29vcmRpbmF0ZVkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIHRoaXMuYWxsU2hpcENvb3JkaW5hdGVzLnB1c2gobmV3U2hpcC5jb29yZGluYXRlc1tpXSk7XG4gICAgLy8gfVxuICAgIHRoaXMuc2hpcEFycmF5LnB1c2gobmFtZSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLm1pc3NlZEF0dGFja0FycmF5LmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZXMpICE9IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJhbHJlYWR5IGd1ZXNzZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcEFycmF5W2ldLmNvb3JkaW5hdGVzLmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZXMpICE9IC0xKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnaW5nIGhpdDpcIiArIGF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy5zaGlwQXJyYXlbaV0uaGl0Q291bnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBtaXNzOlwiICsgYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIHRoaXMubWlzc2VkQXR0YWNrQXJyYXkucHVzaChhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG4gIGFsbFN1bmsoKSB7XG4gICAgbGV0IGFsbFN1bmtTaGlwcyA9IHRydWU7XG4gICAgdGhpcy5zaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rID09PSBmYWxzZSkge1xuICAgICAgICBhbGxTdW5rU2hpcHMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsU3Vua1NoaXBzO1xuICB9XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiLy8gaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gIH1cbiAgY2hlY2tUdXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR1cm47XG4gIH1cbiAgZW5kVHVybihlbmVteVBsYXllcikge1xuICAgIGlmICh0aGlzLnR1cm4gPT0gdHJ1ZSkge1xuICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrKGNvb3JkaW5hdGVzWFksIGVuZW15UGxheWVyLCBlbmVteUJvYXJkKSB7XG4gICAgaWYgKHRoaXMuY2hlY2t0dXJuKCkpIHtcbiAgICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1hZKTtcbiAgICAgIHRoaXMuZW5kVHVybihlbmVteVBsYXllcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gIC8vQnVpbGRzIHNoaXAgb2JqZWN0cyB0aGF0IGluY2x1ZGUgdGhlaXIgbGVuZ3RoLCBudW1iZXIgb2YgaGl0cyxcbiAgLy9hbmQgd2hldGhlciB0aGV5IGhhdmUgYmVlbiBzdW5rXG4gIC8vIGhpdCgpIGZ1bmN0aW9uIHRvIGluY3JlYXNlICMgb2YgJ2hpdHMnIGluIHRoZSBzaGlwXG4gIC8vIGlzU3VuaygpIGNhbGN1bGF0ZXMgYmFzZWQgb24gbGVuZ3RoIGFuZCAjIG9mIGhpdHNcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5zaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gIH1cbiAgaGl0Q291bnQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLnNoaXBMZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNTdW5rO1xuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9haVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vUGxheWVyIFNoaXBzXG5sZXQgY2FycmllciA9IG5ldyBTaGlwKDUpO1xubGV0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbmxldCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzKTtcbmxldCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbmxldCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMik7XG4vL0FJIFNoaXBzXG5sZXQgY2FycmllckFJID0gbmV3IFNoaXAoNSk7XG5sZXQgYmF0dGxlc2hpcEFJID0gbmV3IFNoaXAoNCk7XG5sZXQgZGVzdHJveWVyQUkgPSBuZXcgU2hpcCgzKTtcbmxldCBzdWJtYXJpbmVBSSA9IG5ldyBTaGlwKDMpO1xubGV0IHBhdHJvbEJvYXRBSSA9IG5ldyBTaGlwKDIpO1xuLy9HYW1lYm9hcmRzXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5sZXQgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbi8vUGxheWVyc1xubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoXCJDaGFkXCIpO1xubGV0IGFpID0gbmV3IEFJKFwiQUlcIiwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4vL1Rlc3Qgc2hpcCBwbGFjZW1lbnRzIC0gUGxheWVyXG5cbmxldCBwbGF5ZXJCb2FyZEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckJvYXJkXCIpO1xubGV0IGFpQm9hcmRIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5haUJvYXJkXCIpO1xuLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmQuZ2V0Qm9hcmRBcnJheSgpKTtcblxuY3JlYXRlQm9hcmQoXCJwbGF5ZXJCb2FyZFwiKTtcbmNyZWF0ZUJvYXJkKFwiYWlCb2FyZFwiKTtcblxuLy9QbGF5ZXIgcmFuZG9tIHNoaXAgcGxhY2VtZW50XG5yYW5kb21TaGlwUGxhY2VtZW50KGNhcnJpZXIsIHBsYXllckJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoYmF0dGxlc2hpcCwgcGxheWVyQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChkZXN0cm95ZXIsIHBsYXllckJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoc3VibWFyaW5lLCBwbGF5ZXJCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KHBhdHJvbEJvYXQsIHBsYXllckJvYXJkKTtcbi8vQUkgcmFuZG9tIHNoaXAgcGxhY2VtZW50XG5yYW5kb21TaGlwUGxhY2VtZW50KGNhcnJpZXJBSSwgYWlCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KGJhdHRsZXNoaXBBSSwgYWlCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KGRlc3Ryb3llckFJLCBhaUJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoc3VibWFyaW5lQUksIGFpQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChwYXRyb2xCb2F0QUksIGFpQm9hcmQpO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZE5hbWUpIHtcbiAgbGV0IGJvYXJkTmFtZUhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZE5hbWV9YCk7XG4gIGxldCBjZWxsQm9hcmRDbGFzcyA9IGJvYXJkTmFtZSArIFwiQ2VsbFwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmdldEJvYXJkQXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbEJvYXJkQ2xhc3MpO1xuICAgIGxldCBjZWxsQ2xhc3MgPSBwbGF5ZXJCb2FyZC5nZXRCb2FyZEFycmF5KClbaV07XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDbGFzcyk7XG4gICAgaWYgKGJvYXJkTmFtZSA9PSBcImFpQm9hcmRcIikge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgYXR0YWNrRXZlbnQoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChib2FyZE5hbWUgPT0gXCJwbGF5ZXJCb2FyZFwiKSB7XG4gICAgICAvL2FkZCBzaGlwIHBsYWNlbWVudCBldmVudCBsaXN0ZW5lcidzIGhlcmVcbiAgICB9XG4gICAgYm9hcmROYW1lSFRNTC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxufVxuZnVuY3Rpb24gcmFuZG9tU2hpcFBsYWNlbWVudChzaGlwTmFtZSwgYm9hcmROYW1lKSB7XG4gIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gIGxldCBwbGFjZW1lbnRDb29yZGluYXRlcyA9XG4gICAgYXJyYXlYW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV0gK1xuICAgIGFycmF5WVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAvLyBjb25zb2xlLmxvZyhcIkNoZWNraW5nOlwiICsgcGxhY2VtZW50Q29vcmRpbmF0ZXMpO1xuICBsZXQgYWxpZ25tZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gIGlmIChcbiAgICBib2FyZE5hbWUuY2hlY2tTaGlwUGxhY2VtZW50KFxuICAgICAgcGxhY2VtZW50Q29vcmRpbmF0ZXMuc3Vic3RyaW5nKDAsIDEpLFxuICAgICAgcGxhY2VtZW50Q29vcmRpbmF0ZXMuc3Vic3RyaW5nKDEsIDMpLFxuICAgICAgc2hpcE5hbWUuc2hpcExlbmd0aCxcbiAgICAgIGFsaWdubWVudFxuICAgIClcbiAgKSB7XG4gICAgYm9hcmROYW1lLnBsYWNlU2hpcChwbGFjZW1lbnRDb29yZGluYXRlcywgc2hpcE5hbWUsIGFsaWdubWVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTmFtZS5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGxldCBzaGlwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAvLyAgIGAuJHtib2FyZE5hbWV9LiR7c2hpcE5hbWUuY29vcmRpbmF0ZXNbaV19YFxuICAgICAgLy8gKTtcbiAgICAgIGxldCBzaGlwQ2VsbCA9IHNoaXBOYW1lLmNvb3JkaW5hdGVzW2ldO1xuICAgICAgaWYgKGJvYXJkTmFtZSA9PSBwbGF5ZXJCb2FyZCkge1xuICAgICAgICBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnBsYXllckJvYXJkQ2VsbC4ke3NoaXBDZWxsfWBcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcENlbGxIVE1MKTtcbiAgICAgICAgc2hpcENlbGxIVE1MLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZE5hbWUgPT0gYWlCb2FyZCkge1xuICAgICAgICBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFpQm9hcmRDZWxsLiR7c2hpcENlbGx9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBDZWxsSFRNTCk7XG4gICAgICAgIHNoaXBDZWxsSFRNTC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSByYW5kb21TaGlwUGxhY2VtZW50KHNoaXBOYW1lLCBib2FyZE5hbWUpO1xufVxuXG5mdW5jdGlvbiBhdHRhY2tFdmVudChlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwicGxheWVyIGF0dGFjazpcIiArIGVsZW1lbnQuY2xhc3NMaXN0WzFdKTsgLy8gXCJGNVwiXG4gIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhlbGVtZW50LmNsYXNzTGlzdFsxXSk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0ge1xuLy8gICBTaGlwOiBTaGlwLFxuLy8gICBHYW1lYm9hcmQ6IEdhbWVib2FyZCxcbi8vICAgUGxheWVyOiBQbGF5ZXIsXG4vLyAgIEFJOiBBSSxcbi8vIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=