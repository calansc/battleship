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
.header{
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
}
.boards {
    display: grid;
    grid-auto-flow: column;
}
.playerSide, .aiSide { }
.boardTitle {
    text-align: center;
    margin-bottom: 4px;
}
.playerBoard, .aiBoard{
    margin: 0 auto;
    display:grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
    column-gap:0px;
    width: 45vw;
    height: 45vw;;
    
}
.playerBoardCell, .aiBoardCell {
    height:calc(4.5vw - 2px);
    width:calc(4.5vw - 2px);
    border: 1px black solid;
    display: grid;
    justify-content: center;
    align-content: center;
    overflow:hidden;
}
.playerBoardCell.ship {
    background-color: blue;
}
.aiBoardCell.ship{
    background-color: rgb(168, 168, 245);
}
.hit {
    
}
.image { 

}
.lastMove {
    text-align: center;
    margin-top:4px;
}
.winPopup {
    display:none;
    position: absolute;
    margin-left:calc(30vw - 2px);
    margin-top:5vh;
    border:2px black solid;
    border-radius: 8px;
    height: 20vw;
    width: 40vw;
    background-color: white;
    font-size: 2rem;
    text-align: center;
    justify-content: center;
    align-content: center;
}
.playAgain {
    font-size:1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;wCACoC;AACxC;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA,uBAAuB;AACvB;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,YAAY;IACZ,wEAAwE;IACxE,qEAAqE;IACrE,cAAc;IACd,WAAW;IACX,YAAY;;AAEhB;AACA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,oCAAoC;AACxC;AACA;;AAEA;AACA;;AAEA;AACA;IACI,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    /* --darkblue: #073B4c;\n    background-color: var(--darkblue); */\n} \n* {\n    margin:0px;\n    padding:0px;\n}\n.header{\n    text-align: center;\n    font-size: 2.5em;\n    font-weight: bold;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n.boards {\n    display: grid;\n    grid-auto-flow: column;\n}\n.playerSide, .aiSide { }\n.boardTitle {\n    text-align: center;\n    margin-bottom: 4px;\n}\n.playerBoard, .aiBoard{\n    margin: 0 auto;\n    display:grid;\n    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;\n    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;\n    column-gap:0px;\n    width: 45vw;\n    height: 45vw;;\n    \n}\n.playerBoardCell, .aiBoardCell {\n    height:calc(4.5vw - 2px);\n    width:calc(4.5vw - 2px);\n    border: 1px black solid;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    overflow:hidden;\n}\n.playerBoardCell.ship {\n    background-color: blue;\n}\n.aiBoardCell.ship{\n    background-color: rgb(168, 168, 245);\n}\n.hit {\n    \n}\n.image { \n\n}\n.lastMove {\n    text-align: center;\n    margin-top:4px;\n}\n.winPopup {\n    display:none;\n    position: absolute;\n    margin-left:calc(30vw - 2px);\n    margin-top:5vh;\n    border:2px black solid;\n    border-radius: 8px;\n    height: 20vw;\n    width: 40vw;\n    background-color: white;\n    font-size: 2rem;\n    text-align: center;\n    justify-content: center;\n    align-content: center;\n}\n.playAgain {\n    font-size:1.5rem;\n}"],"sourceRoot":""}]);
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
    this.guessArray = enemyBoard.getBoardArray();
    this.nextAttackArray = [];
    this.lastGuessHit = false;
  }

  randomAttack() {
    if (this.lastGuessHit && this.checkTurn()) {
      this.educatedAttackArray();
    } else if (this.nextAttackArray.length > 0 && this.checkTurn()) {
      this.educatedAttack();
    } else {
      if (this.checkTurn()) {
        let random = Math.floor(Math.random() * this.guessArray.length);
        let attackXY = this.guessArray[random];
        this.lastGuess = attackXY;
        this.guessArray.splice(random, 1);
        if (this.aiAttackArray.indexOf(attackXY) != -1) {
          console.log("AI random redo");
          this.randomAttack();
        } else {
          this.aiAttackArray.push(attackXY);
          console.log("AI attack: " + attackXY);
          this.attack(attackXY, this.enemyPlayer, this.enemyBoard);
          this.endTurn(this.enemyPlayer);
        }
      }
    }
  }
  educatedAttackArray() {
    this.nextAttackArray = [];
    let lastAttack = this.aiAttackArray[this.aiAttackArray.length - 1];
    let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let lastX = arrayX.indexOf(lastAttack[0]);
    let lastY = arrayY.indexOf(lastAttack[1]);
    if (arrayX[lastX - 1]) {
      this.nextAttackArray.push(arrayX[lastX - 1] + arrayY[lastY]);
    }
    if (arrayX[lastX + 1]) {
      this.nextAttackArray.push(arrayX[lastX + 1] + arrayY[lastY]);
    }
    if (arrayY[lastY - 1]) {
      this.nextAttackArray.push(arrayX[lastX] + arrayY[lastY - 1]);
    }
    if (arrayY[lastY + 1]) {
      this.nextAttackArray.push(arrayX[lastX] + arrayY[lastY + 1]);
    }
    console.log(this.nextAttackArray);
    this.educatedAttack();
  }
  educatedAttack() {
    let nextGuess = this.nextAttackArray[0];
    if (this.aiAttackArray.indexOf(nextGuess) != -1) {
      this.nextAttackArray.splice(0, 1);
      console.log("AI random redo");
      if (this.nextAttackArray.length > 0) {
        this.educatedAttack();
      } else {
        this.randomAttack();
      }
    } else {
      this.aiAttackArray.push(nextGuess);
      this.guessArray.splice(this.guessArray.indexOf(nextGuess), 1);
      this.nextAttackArray.splice(0, 1);
      console.log("AI educated Attack:" + nextGuess);
      this.attack(nextGuess, this.enemyPlayer, this.enemyBoard);
      this.endTurn(this.enemyPlayer);
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
    this.hitAttackArray = [];
    this.shipArray = [];
    this.lastMove = "";
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
  getMissedAttackArray() {
    return this.missedAttackArray;
  }
  getHitAttackArray() {
    return this.hitAttackArray;
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
    } else if (this.hitAttackArray.indexOf(attackCoordinates) != -1) {
      return console.log("already hit");
    } else {
      for (let i = 0; i < this.shipArray.length; i++) {
        if (this.shipArray[i].coordinates.indexOf(attackCoordinates) != -1) {
          console.log("logging hit:" + attackCoordinates);
          this.lastMove = "Hit at: " + attackCoordinates;
          this.hitAttackArray.push(attackCoordinates);
          this.shipArray[i].hitCount();
          return "hit";
        }
      }
      console.log("logging miss:" + attackCoordinates);
      this.lastMove = "Miss at: " + attackCoordinates;
      this.missedAttackArray.push(attackCoordinates);
      return "miss";
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
    enemyPlayer.startTurn();
  }
  startTurn() {
    if (this.turn == false) {
      this.turn = true;
    }
    // console.log(this.turn);
    try {
      if (typeof this.randomAttack() === "function") {
        this.randomAttack();
      }
    } catch (err) {
      // console.log(err);
    }
  }

  attack(coordinatesXY, enemyPlayer, enemyBoard) {
    if (this.checkTurn()) {
      if (enemyBoard.receiveAttack(coordinatesXY) == "hit") {
        this.lastGuessHit = true;
      } else {
        this.lastGuessHit = false;
      }
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




/***/ }),

/***/ "./src/hit.svg":
/*!*********************!*\
  !*** ./src/hit.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59fbdc96cf84fa409e52.svg";

/***/ }),

/***/ "./src/miss.svg":
/*!**********************!*\
  !*** ./src/miss.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ded1e99216871d2a3ae.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _hit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hit.svg */ "./src/hit.svg");
/* harmony import */ var _miss_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miss.svg */ "./src/miss.svg");








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
  // aiBoard.receiveAttack(element.classList[1]);
  if (element.classList.contains("hit") || element.classList.contains("miss")) {
    return console.log("already guessed");
  } else {
    player.attack(element.classList[1], ai, aiBoard);
    if (aiBoard.allSunk()) {
      winner(1);
      // alert("You win!!!!");
    }
    updateDisplay("aiBoard", aiBoard);
    ai.randomAttack();
    if (playerBoard.allSunk()) {
      winner(2);
      // alert("AI wins!!!!");
    }
    updateDisplay("playerBoard", playerBoard);
  }
}
function updateDisplay(boardName, board) {
  let boardNameCell = boardName + "Cell";
  // console.log(boardNameCell);
  // let shipCellHTML = document.querySelector(`.aiBoardCell.${shipCell}`);
  let hitArray = board.getHitAttackArray();
  let missArray = board.getMissedAttackArray();
  // console.log(hitArray);
  // console.log(missArray);
  for (let i = 0; i < hitArray.length; i++) {
    let shipCellHTML = document.querySelector(
      `.${boardNameCell}.${hitArray[i]}`
    );
    if (shipCellHTML.classList.contains("hit")) {
      continue;
    }
    shipCellHTML.classList.add("hit");
    let hit = new Image();
    hit.src = _hit_svg__WEBPACK_IMPORTED_MODULE_5__;
    hit.classList.add("image");
    hit.classList.add("hit");
    shipCellHTML.appendChild(hit);
    // shipCellHTML.removeEventListener("click");
    // console.log(shipCellHTML);
  }
  for (let j = 0; j < missArray.length; j++) {
    let shipCellHTML = document.querySelector(
      `.${boardNameCell}.${missArray[j]}`
    );
    if (shipCellHTML.classList.contains("miss")) {
      continue;
    }
    shipCellHTML.classList.add("miss");
    let miss = new Image();
    miss.src = _miss_svg__WEBPACK_IMPORTED_MODULE_6__;
    miss.classList.add("image");
    miss.classList.add("miss");
    shipCellHTML.appendChild(miss);
    // shipCellHTML.removeEventListener("click");
  }
  let lastMove = document.querySelector(`.${boardName}`).parentElement
    .childNodes[5];
  lastMove.textContent = board.lastMove;
}
function winner(num) {
  document.querySelector(".winPopup").style.display = "grid";
  let winner = document.querySelector(".winner");
  if (num == 1) {
    winner.textContent = "You win!!";
  } else if (num == 2) {
    winner.textContent = "AI wins!!";
  }
  let playAgain = document.querySelector(".playAgain");
  playAgain.addEventListener("click", () => {
    location.reload();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxpQ0FBaUMsNkJBQTZCLHlDQUF5QyxNQUFNLEtBQUssaUJBQWlCLGtCQUFrQixHQUFHLFVBQVUseUJBQXlCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLHlCQUF5QixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixHQUFHLDBCQUEwQixlQUFlLHlCQUF5Qix5QkFBeUIsR0FBRyx5QkFBeUIscUJBQXFCLG1CQUFtQiwrRUFBK0UsNEVBQTRFLHFCQUFxQixrQkFBa0Isb0JBQW9CLFNBQVMsa0NBQWtDLCtCQUErQiw4QkFBOEIsOEJBQThCLG9CQUFvQiw4QkFBOEIsNEJBQTRCLHNCQUFzQixHQUFHLHlCQUF5Qiw2QkFBNkIsR0FBRyxvQkFBb0IsMkNBQTJDLEdBQUcsUUFBUSxTQUFTLFdBQVcsS0FBSyxhQUFhLHlCQUF5QixxQkFBcUIsR0FBRyxhQUFhLG1CQUFtQix5QkFBeUIsbUNBQW1DLHFCQUFxQiw2QkFBNkIseUJBQXlCLG1CQUFtQixrQkFBa0IsOEJBQThCLHNCQUFzQix5QkFBeUIsOEJBQThCLDRCQUE0QixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQzd4RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ25GMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQzs7QUFFbEMsaUJBQWlCLDJDQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVjOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZnQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ04sc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7OztBQ3JJckIsWUFBWSxZQUFZOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNWO0FBQ0k7QUFDUjtBQUNRO0FBQ047QUFDRTs7QUFFOUI7QUFDQSxrQkFBa0IsdUNBQUk7QUFDdEIscUJBQXFCLHVDQUFJO0FBQ3pCLG9CQUFvQix1Q0FBSTtBQUN4QixvQkFBb0IsdUNBQUk7QUFDeEIscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCLHVCQUF1Qix1Q0FBSTtBQUMzQixzQkFBc0IsdUNBQUk7QUFDMUIsc0JBQXNCLHVDQUFJO0FBQzFCLHVCQUF1Qix1Q0FBSTtBQUMzQjtBQUNBLHNCQUFzQixpREFBUztBQUMvQixrQkFBa0IsaURBQVM7QUFDM0I7QUFDQSxpQkFBaUIsMkNBQU07QUFDdkIsYUFBYSxtQ0FBRTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0Esa0JBQWtCLHdDQUF3QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0EsZUFBZSxVQUFVLEdBQUcsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGtFQUFrRSxTQUFTO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFNBQVM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0EsVUFBVSxjQUFjLEdBQUcsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFDQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQSxVQUFVLGNBQWMsR0FBRyxhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAvKiAtLWRhcmtibHVlOiAjMDczQjRjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTsgKi9cbn0gXG4qIHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xufVxuLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmJvYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuLnBsYXllclNpZGUsIC5haVNpZGUgeyB9XG4uYm9hcmRUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5wbGF5ZXJCb2FyZCwgLmFpQm9hcmR7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgY29sdW1uLWdhcDowcHg7XG4gICAgd2lkdGg6IDQ1dnc7XG4gICAgaGVpZ2h0OiA0NXZ3OztcbiAgICBcbn1cbi5wbGF5ZXJCb2FyZENlbGwsIC5haUJvYXJkQ2VsbCB7XG4gICAgaGVpZ2h0OmNhbGMoNC41dncgLSAycHgpO1xuICAgIHdpZHRoOmNhbGMoNC41dncgLSAycHgpO1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbn1cbi5wbGF5ZXJCb2FyZENlbGwuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5haUJvYXJkQ2VsbC5zaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDE2OCwgMjQ1KTtcbn1cbi5oaXQge1xuICAgIFxufVxuLmltYWdlIHsgXG5cbn1cbi5sYXN0TW92ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6NHB4O1xufVxuLndpblBvcHVwIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OmNhbGMoMzB2dyAtIDJweCk7XG4gICAgbWFyZ2luLXRvcDo1dmg7XG4gICAgYm9yZGVyOjJweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnBsYXlBZ2FpbiB7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTt3Q0FDb0M7QUFDeEM7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQSx1QkFBdUI7QUFDdkI7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHdFQUF3RTtJQUN4RSxxRUFBcUU7SUFDckUsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAvKiAtLWRhcmtibHVlOiAjMDczQjRjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7ICovXFxufSBcXG4qIHtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgcGFkZGluZzowcHg7XFxufVxcbi5oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuLnBsYXllclNpZGUsIC5haVNpZGUgeyB9XFxuLmJvYXJkVGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuLnBsYXllckJvYXJkLCAuYWlCb2FyZHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGNvbHVtbi1nYXA6MHB4O1xcbiAgICB3aWR0aDogNDV2dztcXG4gICAgaGVpZ2h0OiA0NXZ3OztcXG4gICAgXFxufVxcbi5wbGF5ZXJCb2FyZENlbGwsIC5haUJvYXJkQ2VsbCB7XFxuICAgIGhlaWdodDpjYWxjKDQuNXZ3IC0gMnB4KTtcXG4gICAgd2lkdGg6Y2FsYyg0LjV2dyAtIDJweCk7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxufVxcbi5wbGF5ZXJCb2FyZENlbGwuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5haUJvYXJkQ2VsbC5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDI0NSk7XFxufVxcbi5oaXQge1xcbiAgICBcXG59XFxuLmltYWdlIHsgXFxuXFxufVxcbi5sYXN0TW92ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDo0cHg7XFxufVxcbi53aW5Qb3B1cCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDpjYWxjKDMwdncgLSAycHgpO1xcbiAgICBtYXJnaW4tdG9wOjV2aDtcXG4gICAgYm9yZGVyOjJweCBibGFjayBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDIwdnc7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wbGF5QWdhaW4ge1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW5lbXlQbGF5ZXIsIGVuZW15Qm9hcmQpIHtcbiAgICBzdXBlcihuYW1lLCBlbmVteVBsYXllcik7XG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgICB0aGlzLmVuZW15UGxheWVyID0gZW5lbXlQbGF5ZXI7XG4gICAgdGhpcy5lbmVteUJvYXJkID0gZW5lbXlCb2FyZDtcbiAgICB0aGlzLmFpQXR0YWNrQXJyYXkgPSBbXTtcbiAgICB0aGlzLmd1ZXNzQXJyYXkgPSBlbmVteUJvYXJkLmdldEJvYXJkQXJyYXkoKTtcbiAgICB0aGlzLm5leHRBdHRhY2tBcnJheSA9IFtdO1xuICAgIHRoaXMubGFzdEd1ZXNzSGl0ID0gZmFsc2U7XG4gIH1cblxuICByYW5kb21BdHRhY2soKSB7XG4gICAgaWYgKHRoaXMubGFzdEd1ZXNzSGl0ICYmIHRoaXMuY2hlY2tUdXJuKCkpIHtcbiAgICAgIHRoaXMuZWR1Y2F0ZWRBdHRhY2tBcnJheSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0QXR0YWNrQXJyYXkubGVuZ3RoID4gMCAmJiB0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICB0aGlzLmVkdWNhdGVkQXR0YWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmd1ZXNzQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgbGV0IGF0dGFja1hZID0gdGhpcy5ndWVzc0FycmF5W3JhbmRvbV07XG4gICAgICAgIHRoaXMubGFzdEd1ZXNzID0gYXR0YWNrWFk7XG4gICAgICAgIHRoaXMuZ3Vlc3NBcnJheS5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICAgICAgaWYgKHRoaXMuYWlBdHRhY2tBcnJheS5pbmRleE9mKGF0dGFja1hZKSAhPSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUkgcmFuZG9tIHJlZG9cIik7XG4gICAgICAgICAgdGhpcy5yYW5kb21BdHRhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFpQXR0YWNrQXJyYXkucHVzaChhdHRhY2tYWSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBSSBhdHRhY2s6IFwiICsgYXR0YWNrWFkpO1xuICAgICAgICAgIHRoaXMuYXR0YWNrKGF0dGFja1hZLCB0aGlzLmVuZW15UGxheWVyLCB0aGlzLmVuZW15Qm9hcmQpO1xuICAgICAgICAgIHRoaXMuZW5kVHVybih0aGlzLmVuZW15UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlZHVjYXRlZEF0dGFja0FycmF5KCkge1xuICAgIHRoaXMubmV4dEF0dGFja0FycmF5ID0gW107XG4gICAgbGV0IGxhc3RBdHRhY2sgPSB0aGlzLmFpQXR0YWNrQXJyYXlbdGhpcy5haUF0dGFja0FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgICBsZXQgbGFzdFggPSBhcnJheVguaW5kZXhPZihsYXN0QXR0YWNrWzBdKTtcbiAgICBsZXQgbGFzdFkgPSBhcnJheVkuaW5kZXhPZihsYXN0QXR0YWNrWzFdKTtcbiAgICBpZiAoYXJyYXlYW2xhc3RYIC0gMV0pIHtcbiAgICAgIHRoaXMubmV4dEF0dGFja0FycmF5LnB1c2goYXJyYXlYW2xhc3RYIC0gMV0gKyBhcnJheVlbbGFzdFldKTtcbiAgICB9XG4gICAgaWYgKGFycmF5WFtsYXN0WCArIDFdKSB7XG4gICAgICB0aGlzLm5leHRBdHRhY2tBcnJheS5wdXNoKGFycmF5WFtsYXN0WCArIDFdICsgYXJyYXlZW2xhc3RZXSk7XG4gICAgfVxuICAgIGlmIChhcnJheVlbbGFzdFkgLSAxXSkge1xuICAgICAgdGhpcy5uZXh0QXR0YWNrQXJyYXkucHVzaChhcnJheVhbbGFzdFhdICsgYXJyYXlZW2xhc3RZIC0gMV0pO1xuICAgIH1cbiAgICBpZiAoYXJyYXlZW2xhc3RZICsgMV0pIHtcbiAgICAgIHRoaXMubmV4dEF0dGFja0FycmF5LnB1c2goYXJyYXlYW2xhc3RYXSArIGFycmF5WVtsYXN0WSArIDFdKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5uZXh0QXR0YWNrQXJyYXkpO1xuICAgIHRoaXMuZWR1Y2F0ZWRBdHRhY2soKTtcbiAgfVxuICBlZHVjYXRlZEF0dGFjaygpIHtcbiAgICBsZXQgbmV4dEd1ZXNzID0gdGhpcy5uZXh0QXR0YWNrQXJyYXlbMF07XG4gICAgaWYgKHRoaXMuYWlBdHRhY2tBcnJheS5pbmRleE9mKG5leHRHdWVzcykgIT0gLTEpIHtcbiAgICAgIHRoaXMubmV4dEF0dGFja0FycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQUkgcmFuZG9tIHJlZG9cIik7XG4gICAgICBpZiAodGhpcy5uZXh0QXR0YWNrQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmVkdWNhdGVkQXR0YWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJhbmRvbUF0dGFjaygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFpQXR0YWNrQXJyYXkucHVzaChuZXh0R3Vlc3MpO1xuICAgICAgdGhpcy5ndWVzc0FycmF5LnNwbGljZSh0aGlzLmd1ZXNzQXJyYXkuaW5kZXhPZihuZXh0R3Vlc3MpLCAxKTtcbiAgICAgIHRoaXMubmV4dEF0dGFja0FycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQUkgZWR1Y2F0ZWQgQXR0YWNrOlwiICsgbmV4dEd1ZXNzKTtcbiAgICAgIHRoaXMuYXR0YWNrKG5leHRHdWVzcywgdGhpcy5lbmVteVBsYXllciwgdGhpcy5lbmVteUJvYXJkKTtcbiAgICAgIHRoaXMuZW5kVHVybih0aGlzLmVuZW15UGxheWVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgQUkgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmJ1aWxkQm9hcmQoKTtcbiAgICAvLyB0aGlzLmFsbFNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkQXR0YWNrQXJyYXkgPSBbXTtcbiAgICB0aGlzLmhpdEF0dGFja0FycmF5ID0gW107XG4gICAgdGhpcy5zaGlwQXJyYXkgPSBbXTtcbiAgICB0aGlzLmxhc3RNb3ZlID0gXCJcIjtcbiAgfVxuICBidWlsZEJvYXJkKCkge1xuICAgIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgICBsZXQgYm9hcmRBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlZLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5WC5sZW5ndGg7IGorKykge1xuICAgICAgICBib2FyZEFycmF5LnB1c2goYXJyYXlYW2pdICsgYXJyYXlZW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkQXJyYXk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgZ2V0Qm9hcmRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuICBnZXRNaXNzZWRBdHRhY2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5taXNzZWRBdHRhY2tBcnJheTtcbiAgfVxuICBnZXRIaXRBdHRhY2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRBdHRhY2tBcnJheTtcbiAgfVxuICBjaGVja1NoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZLCBsZW5ndGgsIGFsaWdubWVudCkge1xuICAgIGxldCBjb29yZGluYXRlc1hZID0gY29vcmRpbmF0ZVggKyBjb29yZGluYXRlWTtcbiAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgbGV0IGNvb3JkaW5hdGVBcnJheSA9IFtjb29yZGluYXRlc1hZXTtcbiAgICAvLyBhbGlnbm1lbnQ6IGhvcml6b250YWwgPSAwLCB2ZXJ0aWNhbCA9IDFcbiAgICBpZiAoYWxpZ25tZW50ID09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld1ggPSBhcnJheVhbYXJyYXlYLmluZGV4T2YoY29vcmRpbmF0ZVgpICsgaV07XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKG5ld1ggKyBjb29yZGluYXRlWSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVBcnJheSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3WSA9IGFycmF5WVthcnJheVkuaW5kZXhPZihjb29yZGluYXRlWSkgKyBpXTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5LnB1c2goY29vcmRpbmF0ZVggKyBuZXdZKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZUFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaGlwQXJyYXkubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29vcmRpbmF0ZUFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBBcnJheVtpXS5jb29yZGluYXRlcy5pbmRleE9mKGNvb3JkaW5hdGVBcnJheVtqXSkgIT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsaWdubWVudCA9PT0gMCkge1xuICAgICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICBpZiAoYXJyYXlYLmluZGV4T2YoY29vcmRpbmF0ZVgpID4gMTAgLSBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAxKSB7XG4gICAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgICBpZiAoYXJyYXlZLmluZGV4T2YoY29vcmRpbmF0ZVkpID4gMTAgLSBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBwbGFjZVNoaXAoY29vcmRpbmF0ZVhZLCBuYW1lLCBhbGlnbm1lbnQpIHtcbiAgICAvLyBhbGlnbm1lbnQ6IGhvcml6b250YWwgPSAwLCB2ZXJ0aWNhbCA9IDFcbiAgICBpZiAoYWxpZ25tZW50ID09PSAxKSB7XG4gICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZVhZKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbmFtZS5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVYID0gY29vcmRpbmF0ZVhZWzBdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZVkgPSBjb29yZGluYXRlWFlbMV07XG4gICAgICAgIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgICAgICAgbGV0IGluZGV4WSA9IGFycmF5WS5pbmRleE9mKGNvb3JkaW5hdGVZKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVZID0gYXJyYXlZW2luZGV4WSArIGldO1xuICAgICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZVggKyBuZXdDb29yZGluYXRlWSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09IDApIHtcbiAgICAgIG5hbWUuY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlWFkpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuYW1lLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZVggPSBjb29yZGluYXRlWFkuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZVkgPSBjb29yZGluYXRlWFkuc3Vic3RyaW5nKDEsIDMpO1xuICAgICAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICAgICAgbGV0IGluZGV4WCA9IGFycmF5WC5pbmRleE9mKGNvb3JkaW5hdGVYKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVYID0gYXJyYXlYW2luZGV4WCArIGldO1xuICAgICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2gobmV3Q29vcmRpbmF0ZVggKyBjb29yZGluYXRlWSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U2hpcC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgdGhpcy5hbGxTaGlwQ29vcmRpbmF0ZXMucHVzaChuZXdTaGlwLmNvb3JkaW5hdGVzW2ldKTtcbiAgICAvLyB9XG4gICAgdGhpcy5zaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICByZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMubWlzc2VkQXR0YWNrQXJyYXkuaW5kZXhPZihhdHRhY2tDb29yZGluYXRlcykgIT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImFscmVhZHkgZ3Vlc3NlZFwiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGl0QXR0YWNrQXJyYXkuaW5kZXhPZihhdHRhY2tDb29yZGluYXRlcykgIT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImFscmVhZHkgaGl0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBBcnJheVtpXS5jb29yZGluYXRlcy5pbmRleE9mKGF0dGFja0Nvb3JkaW5hdGVzKSAhPSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBoaXQ6XCIgKyBhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICAgICAgdGhpcy5sYXN0TW92ZSA9IFwiSGl0IGF0OiBcIiArIGF0dGFja0Nvb3JkaW5hdGVzO1xuICAgICAgICAgIHRoaXMuaGl0QXR0YWNrQXJyYXkucHVzaChhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICAgICAgdGhpcy5zaGlwQXJyYXlbaV0uaGl0Q291bnQoKTtcbiAgICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJsb2dnaW5nIG1pc3M6XCIgKyBhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICB0aGlzLmxhc3RNb3ZlID0gXCJNaXNzIGF0OiBcIiArIGF0dGFja0Nvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tBcnJheS5wdXNoKGF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gIH1cbiAgYWxsU3VuaygpIHtcbiAgICBsZXQgYWxsU3Vua1NoaXBzID0gdHJ1ZTtcbiAgICB0aGlzLnNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIGFsbFN1bmtTaGlwcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rU2hpcHM7XG4gIH1cbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCIvLyBpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgfVxuICBjaGVja1R1cm4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHVybjtcbiAgfVxuICBlbmRUdXJuKGVuZW15UGxheWVyKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICB9XG4gICAgZW5lbXlQbGF5ZXIuc3RhcnRUdXJuKCk7XG4gIH1cbiAgc3RhcnRUdXJuKCkge1xuICAgIGlmICh0aGlzLnR1cm4gPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudHVybiA9IHRydWU7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHVybik7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yYW5kb21BdHRhY2soKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMucmFuZG9tQXR0YWNrKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjayhjb29yZGluYXRlc1hZLCBlbmVteVBsYXllciwgZW5lbXlCb2FyZCkge1xuICAgIGlmICh0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICBpZiAoZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWFkpID09IFwiaGl0XCIpIHtcbiAgICAgICAgdGhpcy5sYXN0R3Vlc3NIaXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0R3Vlc3NIaXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5kVHVybihlbmVteVBsYXllcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gIC8vQnVpbGRzIHNoaXAgb2JqZWN0cyB0aGF0IGluY2x1ZGUgdGhlaXIgbGVuZ3RoLCBudW1iZXIgb2YgaGl0cyxcbiAgLy9hbmQgd2hldGhlciB0aGV5IGhhdmUgYmVlbiBzdW5rXG4gIC8vIGhpdCgpIGZ1bmN0aW9uIHRvIGluY3JlYXNlICMgb2YgJ2hpdHMnIGluIHRoZSBzaGlwXG4gIC8vIGlzU3VuaygpIGNhbGN1bGF0ZXMgYmFzZWQgb24gbGVuZ3RoIGFuZCAjIG9mIGhpdHNcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5zaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gIH1cbiAgaGl0Q291bnQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLnNoaXBMZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNTdW5rO1xuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL2FpXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBIaXQgZnJvbSBcIi4vaGl0LnN2Z1wiO1xuaW1wb3J0IE1pc3MgZnJvbSBcIi4vbWlzcy5zdmdcIjtcblxuLy9QbGF5ZXIgU2hpcHNcbmxldCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xubGV0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpO1xubGV0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xubGV0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyKTtcbi8vQUkgU2hpcHNcbmxldCBjYXJyaWVyQUkgPSBuZXcgU2hpcCg1KTtcbmxldCBiYXR0bGVzaGlwQUkgPSBuZXcgU2hpcCg0KTtcbmxldCBkZXN0cm95ZXJBSSA9IG5ldyBTaGlwKDMpO1xubGV0IHN1Ym1hcmluZUFJID0gbmV3IFNoaXAoMyk7XG5sZXQgcGF0cm9sQm9hdEFJID0gbmV3IFNoaXAoMik7XG4vL0dhbWVib2FyZHNcbmxldCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBhaUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuLy9QbGF5ZXJzXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcihcIkNoYWRcIik7XG5sZXQgYWkgPSBuZXcgQUkoXCJBSVwiLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcbi8vVGVzdCBzaGlwIHBsYWNlbWVudHMgLSBQbGF5ZXJcblxubGV0IHBsYXllckJvYXJkSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyQm9hcmRcIik7XG5sZXQgYWlCb2FyZEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFpQm9hcmRcIik7XG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5nZXRCb2FyZEFycmF5KCkpO1xuXG5jcmVhdGVCb2FyZChcInBsYXllckJvYXJkXCIpO1xuY3JlYXRlQm9hcmQoXCJhaUJvYXJkXCIpO1xuXG4vL1BsYXllciByYW5kb20gc2hpcCBwbGFjZW1lbnRcbnJhbmRvbVNoaXBQbGFjZW1lbnQoY2FycmllciwgcGxheWVyQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChiYXR0bGVzaGlwLCBwbGF5ZXJCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KGRlc3Ryb3llciwgcGxheWVyQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChzdWJtYXJpbmUsIHBsYXllckJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQocGF0cm9sQm9hdCwgcGxheWVyQm9hcmQpO1xuLy9BSSByYW5kb20gc2hpcCBwbGFjZW1lbnRcbnJhbmRvbVNoaXBQbGFjZW1lbnQoY2FycmllckFJLCBhaUJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoYmF0dGxlc2hpcEFJLCBhaUJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoZGVzdHJveWVyQUksIGFpQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChzdWJtYXJpbmVBSSwgYWlCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KHBhdHJvbEJvYXRBSSwgYWlCb2FyZCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGJvYXJkTmFtZSkge1xuICBsZXQgYm9hcmROYW1lSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkTmFtZX1gKTtcbiAgbGV0IGNlbGxCb2FyZENsYXNzID0gYm9hcmROYW1lICsgXCJDZWxsXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQuZ2V0Qm9hcmRBcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChjZWxsQm9hcmRDbGFzcyk7XG4gICAgbGV0IGNlbGxDbGFzcyA9IHBsYXllckJvYXJkLmdldEJvYXJkQXJyYXkoKVtpXTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbENsYXNzKTtcbiAgICBpZiAoYm9hcmROYW1lID09IFwiYWlCb2FyZFwiKSB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBhdHRhY2tFdmVudChlLnRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkTmFtZSA9PSBcInBsYXllckJvYXJkXCIpIHtcbiAgICAgIC8vYWRkIHNoaXAgcGxhY2VtZW50IGV2ZW50IGxpc3RlbmVyJ3MgaGVyZVxuICAgIH1cbiAgICBib2FyZE5hbWVIVE1MLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG59XG5mdW5jdGlvbiByYW5kb21TaGlwUGxhY2VtZW50KHNoaXBOYW1lLCBib2FyZE5hbWUpIHtcbiAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgbGV0IHBsYWNlbWVudENvb3JkaW5hdGVzID1cbiAgICBhcnJheVhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSArXG4gICAgYXJyYXlZW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gIC8vIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmc6XCIgKyBwbGFjZW1lbnRDb29yZGluYXRlcyk7XG4gIGxldCBhbGlnbm1lbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgaWYgKFxuICAgIGJvYXJkTmFtZS5jaGVja1NoaXBQbGFjZW1lbnQoXG4gICAgICBwbGFjZW1lbnRDb29yZGluYXRlcy5zdWJzdHJpbmcoMCwgMSksXG4gICAgICBwbGFjZW1lbnRDb29yZGluYXRlcy5zdWJzdHJpbmcoMSwgMyksXG4gICAgICBzaGlwTmFtZS5zaGlwTGVuZ3RoLFxuICAgICAgYWxpZ25tZW50XG4gICAgKVxuICApIHtcbiAgICBib2FyZE5hbWUucGxhY2VTaGlwKHBsYWNlbWVudENvb3JkaW5hdGVzLCBzaGlwTmFtZSwgYWxpZ25tZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBOYW1lLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgLy8gbGV0IHNoaXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIC8vICAgYC4ke2JvYXJkTmFtZX0uJHtzaGlwTmFtZS5jb29yZGluYXRlc1tpXX1gXG4gICAgICAvLyApO1xuICAgICAgbGV0IHNoaXBDZWxsID0gc2hpcE5hbWUuY29vcmRpbmF0ZXNbaV07XG4gICAgICBpZiAoYm9hcmROYW1lID09IHBsYXllckJvYXJkKSB7XG4gICAgICAgIGxldCBzaGlwQ2VsbEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAucGxheWVyQm9hcmRDZWxsLiR7c2hpcENlbGx9YFxuICAgICAgICApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwQ2VsbEhUTUwpO1xuICAgICAgICBzaGlwQ2VsbEhUTUwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkTmFtZSA9PSBhaUJvYXJkKSB7XG4gICAgICAgIGxldCBzaGlwQ2VsbEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWlCb2FyZENlbGwuJHtzaGlwQ2VsbH1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcENlbGxIVE1MKTtcbiAgICAgICAgc2hpcENlbGxIVE1MLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHJhbmRvbVNoaXBQbGFjZW1lbnQoc2hpcE5hbWUsIGJvYXJkTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFja0V2ZW50KGVsZW1lbnQpIHtcbiAgY29uc29sZS5sb2coXCJwbGF5ZXIgYXR0YWNrOlwiICsgZWxlbWVudC5jbGFzc0xpc3RbMV0pOyAvLyBcIkY1XCJcbiAgLy8gYWlCb2FyZC5yZWNlaXZlQXR0YWNrKGVsZW1lbnQuY2xhc3NMaXN0WzFdKTtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcImFscmVhZHkgZ3Vlc3NlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIuYXR0YWNrKGVsZW1lbnQuY2xhc3NMaXN0WzFdLCBhaSwgYWlCb2FyZCk7XG4gICAgaWYgKGFpQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICB3aW5uZXIoMSk7XG4gICAgICAvLyBhbGVydChcIllvdSB3aW4hISEhXCIpO1xuICAgIH1cbiAgICB1cGRhdGVEaXNwbGF5KFwiYWlCb2FyZFwiLCBhaUJvYXJkKTtcbiAgICBhaS5yYW5kb21BdHRhY2soKTtcbiAgICBpZiAocGxheWVyQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICB3aW5uZXIoMik7XG4gICAgICAvLyBhbGVydChcIkFJIHdpbnMhISEhXCIpO1xuICAgIH1cbiAgICB1cGRhdGVEaXNwbGF5KFwicGxheWVyQm9hcmRcIiwgcGxheWVyQm9hcmQpO1xuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KGJvYXJkTmFtZSwgYm9hcmQpIHtcbiAgbGV0IGJvYXJkTmFtZUNlbGwgPSBib2FyZE5hbWUgKyBcIkNlbGxcIjtcbiAgLy8gY29uc29sZS5sb2coYm9hcmROYW1lQ2VsbCk7XG4gIC8vIGxldCBzaGlwQ2VsbEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWlCb2FyZENlbGwuJHtzaGlwQ2VsbH1gKTtcbiAgbGV0IGhpdEFycmF5ID0gYm9hcmQuZ2V0SGl0QXR0YWNrQXJyYXkoKTtcbiAgbGV0IG1pc3NBcnJheSA9IGJvYXJkLmdldE1pc3NlZEF0dGFja0FycmF5KCk7XG4gIC8vIGNvbnNvbGUubG9nKGhpdEFycmF5KTtcbiAgLy8gY29uc29sZS5sb2cobWlzc0FycmF5KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzaGlwQ2VsbEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2JvYXJkTmFtZUNlbGx9LiR7aGl0QXJyYXlbaV19YFxuICAgICk7XG4gICAgaWYgKHNoaXBDZWxsSFRNTC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBzaGlwQ2VsbEhUTUwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBsZXQgaGl0ID0gbmV3IEltYWdlKCk7XG4gICAgaGl0LnNyYyA9IEhpdDtcbiAgICBoaXQuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICAgIGhpdC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIHNoaXBDZWxsSFRNTC5hcHBlbmRDaGlsZChoaXQpO1xuICAgIC8vIHNoaXBDZWxsSFRNTC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIik7XG4gICAgLy8gY29uc29sZS5sb2coc2hpcENlbGxIVE1MKTtcbiAgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IG1pc3NBcnJheS5sZW5ndGg7IGorKykge1xuICAgIGxldCBzaGlwQ2VsbEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2JvYXJkTmFtZUNlbGx9LiR7bWlzc0FycmF5W2pdfWBcbiAgICApO1xuICAgIGlmIChzaGlwQ2VsbEhUTUwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHNoaXBDZWxsSFRNTC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICBsZXQgbWlzcyA9IG5ldyBJbWFnZSgpO1xuICAgIG1pc3Muc3JjID0gTWlzcztcbiAgICBtaXNzLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgICBtaXNzLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIHNoaXBDZWxsSFRNTC5hcHBlbmRDaGlsZChtaXNzKTtcbiAgICAvLyBzaGlwQ2VsbEhUTUwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIpO1xuICB9XG4gIGxldCBsYXN0TW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkTmFtZX1gKS5wYXJlbnRFbGVtZW50XG4gICAgLmNoaWxkTm9kZXNbNV07XG4gIGxhc3RNb3ZlLnRleHRDb250ZW50ID0gYm9hcmQubGFzdE1vdmU7XG59XG5mdW5jdGlvbiB3aW5uZXIobnVtKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luUG9wdXBcIikuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICBsZXQgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIik7XG4gIGlmIChudW0gPT0gMSkge1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IFwiWW91IHdpbiEhXCI7XG4gIH0gZWxzZSBpZiAobnVtID09IDIpIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIkFJIHdpbnMhIVwiO1xuICB9XG4gIGxldCBwbGF5QWdhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlBZ2FpblwiKTtcbiAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcbi8vICAgU2hpcDogU2hpcCxcbi8vICAgR2FtZWJvYXJkOiBHYW1lYm9hcmQsXG4vLyAgIFBsYXllcjogUGxheWVyLFxuLy8gICBBSTogQUksXG4vLyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9