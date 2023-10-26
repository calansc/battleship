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
@media (max-width:720px) {
    .boards {
        display: grid;
        grid-auto-flow: row;
    
    }
    .playerBoard, .aiBoard{
        margin: 0 auto;
        display:grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
        grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
        column-gap:0px;
        width: 65vw;
        height: 65vw;;
        
    }
    .playerBoardCell, .aiBoardCell {
        height:calc(6.5vw - 2px);
        width:calc(6.5vw - 2px);
        border: 1px black solid;
        display: grid;
        justify-content: center;
        align-content: center;
        overflow:hidden;
    }
}
@media (min-width:720px) {
    .boards {
        display: grid;
        grid-auto-flow: column;
    
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
}
/* .boards {
    display: grid;
    grid-auto-flow: column;

} */
.playerSide, .aiSide { }
.boardTitle {
    text-align: center;
    margin-bottom: 4px;
    font-size: 1.5rem;
    font-weight: bold;
}
/* .playerBoard, .aiBoard{
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
} */
.playerBoardCell.ship {
    background-color: blue;
}
.aiBoardCell.ship{
    /* background-color: rgb(168, 168, 245); */
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
    margin-left:calc(20vw - 2px);
    margin-top:5vh;
    border:2px black solid;
    border-radius: 8px;
    height: 30vw;
    width: 60vw;
    background-color: white;
    font-size: 2rem;
    text-align: center;
    justify-content: center;
    align-content: center;
}
.playAgain {
    font-size:1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;wCACoC;AACxC;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI;QACI,aAAa;QACb,mBAAmB;;IAEvB;IACA;QACI,cAAc;QACd,YAAY;QACZ,wEAAwE;QACxE,qEAAqE;QACrE,cAAc;QACd,WAAW;QACX,YAAY;;IAEhB;IACA;QACI,wBAAwB;QACxB,uBAAuB;QACvB,uBAAuB;QACvB,aAAa;QACb,uBAAuB;QACvB,qBAAqB;QACrB,eAAe;IACnB;AACJ;AACA;IACI;QACI,aAAa;QACb,sBAAsB;;IAE1B;IACA;QACI,cAAc;QACd,YAAY;QACZ,wEAAwE;QACxE,qEAAqE;QACrE,cAAc;QACd,WAAW;QACX,YAAY;;IAEhB;IACA;QACI,wBAAwB;QACxB,uBAAuB;QACvB,uBAAuB;QACvB,aAAa;QACb,uBAAuB;QACvB,qBAAqB;QACrB,eAAe;IACnB;AACJ;AACA;;;;GAIG;AACH,uBAAuB;AACvB;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;;;;;;;;;;;;;;;;;;GAkBG;AACH;IACI,sBAAsB;AAC1B;AACA;IACI,0CAA0C;AAC9C;AACA;;AAEA;AACA;;AAEA;AACA;IACI,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB","sourcesContent":[":root {\n    /* --darkblue: #073B4c;\n    background-color: var(--darkblue); */\n} \n* {\n    margin:0px;\n    padding:0px;\n}\n.header{\n    text-align: center;\n    font-size: 2.5em;\n    font-weight: bold;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n@media (max-width:720px) {\n    .boards {\n        display: grid;\n        grid-auto-flow: row;\n    \n    }\n    .playerBoard, .aiBoard{\n        margin: 0 auto;\n        display:grid;\n        grid-template-columns: auto auto auto auto auto auto auto auto auto auto;\n        grid-template-rows: auto auto auto auto auto auto auto auto auto auto;\n        column-gap:0px;\n        width: 65vw;\n        height: 65vw;;\n        \n    }\n    .playerBoardCell, .aiBoardCell {\n        height:calc(6.5vw - 2px);\n        width:calc(6.5vw - 2px);\n        border: 1px black solid;\n        display: grid;\n        justify-content: center;\n        align-content: center;\n        overflow:hidden;\n    }\n}\n@media (min-width:720px) {\n    .boards {\n        display: grid;\n        grid-auto-flow: column;\n    \n    }\n    .playerBoard, .aiBoard{\n        margin: 0 auto;\n        display:grid;\n        grid-template-columns: auto auto auto auto auto auto auto auto auto auto;\n        grid-template-rows: auto auto auto auto auto auto auto auto auto auto;\n        column-gap:0px;\n        width: 45vw;\n        height: 45vw;;\n        \n    }\n    .playerBoardCell, .aiBoardCell {\n        height:calc(4.5vw - 2px);\n        width:calc(4.5vw - 2px);\n        border: 1px black solid;\n        display: grid;\n        justify-content: center;\n        align-content: center;\n        overflow:hidden;\n    }\n}\n/* .boards {\n    display: grid;\n    grid-auto-flow: column;\n\n} */\n.playerSide, .aiSide { }\n.boardTitle {\n    text-align: center;\n    margin-bottom: 4px;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n/* .playerBoard, .aiBoard{\n    margin: 0 auto;\n    display:grid;\n    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;\n    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;\n    column-gap:0px;\n    width: 45vw;\n    height: 45vw;;\n    \n}\n.playerBoardCell, .aiBoardCell {\n    height:calc(4.5vw - 2px);\n    width:calc(4.5vw - 2px);\n    border: 1px black solid;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    overflow:hidden;\n} */\n.playerBoardCell.ship {\n    background-color: blue;\n}\n.aiBoardCell.ship{\n    /* background-color: rgb(168, 168, 245); */\n}\n.hit {\n    \n}\n.image { \n\n}\n.lastMove {\n    text-align: center;\n    margin-top:4px;\n}\n.winPopup {\n    display:none;\n    position: absolute;\n    margin-left:calc(20vw - 2px);\n    margin-top:5vh;\n    border:2px black solid;\n    border-radius: 8px;\n    height: 30vw;\n    width: 60vw;\n    background-color: white;\n    font-size: 2rem;\n    text-align: center;\n    justify-content: center;\n    align-content: center;\n}\n.playAgain {\n    font-size:1.5rem;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxlQUFlLFVBQVUsR0FBRyx3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isa0VBQWtFLFNBQVM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsU0FBUztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQSxVQUFVLGNBQWMsR0FBRyxZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUNBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBLFVBQVUsY0FBYyxHQUFHLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC8qIC0tZGFya2JsdWU6ICMwNzNCNGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpOyAqL1xufSBcbioge1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG59XG4uaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDo3MjBweCkge1xuICAgIC5ib2FyZHMge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIFxuICAgIH1cbiAgICAucGxheWVyQm9hcmQsIC5haUJvYXJke1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgY29sdW1uLWdhcDowcHg7XG4gICAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgICBoZWlnaHQ6IDY1dnc7O1xuICAgICAgICBcbiAgICB9XG4gICAgLnBsYXllckJvYXJkQ2VsbCwgLmFpQm9hcmRDZWxsIHtcbiAgICAgICAgaGVpZ2h0OmNhbGMoNi41dncgLSAycHgpO1xuICAgICAgICB3aWR0aDpjYWxjKDYuNXZ3IC0gMnB4KTtcbiAgICAgICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDo3MjBweCkge1xuICAgIC5ib2FyZHMge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIFxuICAgIH1cbiAgICAucGxheWVyQm9hcmQsIC5haUJvYXJke1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgY29sdW1uLWdhcDowcHg7XG4gICAgICAgIHdpZHRoOiA0NXZ3O1xuICAgICAgICBoZWlnaHQ6IDQ1dnc7O1xuICAgICAgICBcbiAgICB9XG4gICAgLnBsYXllckJvYXJkQ2VsbCwgLmFpQm9hcmRDZWxsIHtcbiAgICAgICAgaGVpZ2h0OmNhbGMoNC41dncgLSAycHgpO1xuICAgICAgICB3aWR0aDpjYWxjKDQuNXZ3IC0gMnB4KTtcbiAgICAgICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB9XG59XG4vKiAuYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cbn0gKi9cbi5wbGF5ZXJTaWRlLCAuYWlTaWRlIHsgfVxuLmJvYXJkVGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiAucGxheWVyQm9hcmQsIC5haUJvYXJke1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgIGNvbHVtbi1nYXA6MHB4O1xuICAgIHdpZHRoOiA0NXZ3O1xuICAgIGhlaWdodDogNDV2dzs7XG4gICAgXG59XG4ucGxheWVyQm9hcmRDZWxsLCAuYWlCb2FyZENlbGwge1xuICAgIGhlaWdodDpjYWxjKDQuNXZ3IC0gMnB4KTtcbiAgICB3aWR0aDpjYWxjKDQuNXZ3IC0gMnB4KTtcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59ICovXG4ucGxheWVyQm9hcmRDZWxsLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uYWlCb2FyZENlbGwuc2hpcHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDI0NSk7ICovXG59XG4uaGl0IHtcbiAgICBcbn1cbi5pbWFnZSB7IFxuXG59XG4ubGFzdE1vdmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOjRweDtcbn1cbi53aW5Qb3B1cCB7XG4gICAgZGlzcGxheTpub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDpjYWxjKDIwdncgLSAycHgpO1xuICAgIG1hcmdpbi10b3A6NXZoO1xuICAgIGJvcmRlcjoycHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzB2dztcbiAgICB3aWR0aDogNjB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wbGF5QWdhaW4ge1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7d0NBQ29DO0FBQ3hDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7O0lBRXZCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsWUFBWTtRQUNaLHdFQUF3RTtRQUN4RSxxRUFBcUU7UUFDckUsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZOztJQUVoQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7O0lBRTFCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsWUFBWTtRQUNaLHdFQUF3RTtRQUN4RSxxRUFBcUU7UUFDckUsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZOztJQUVoQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7Ozs7R0FJRztBQUNILHVCQUF1QjtBQUN2QjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSDtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksMENBQTBDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLyogLS1kYXJrYmx1ZTogIzA3M0I0YztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpOyAqL1xcbn0gXFxuKiB7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbn1cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6NzIwcHgpIHtcXG4gICAgLmJvYXJkcyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgXFxuICAgIH1cXG4gICAgLnBsYXllckJvYXJkLCAuYWlCb2FyZHtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICAgICAgY29sdW1uLWdhcDowcHg7XFxuICAgICAgICB3aWR0aDogNjV2dztcXG4gICAgICAgIGhlaWdodDogNjV2dzs7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAucGxheWVyQm9hcmRDZWxsLCAuYWlCb2FyZENlbGwge1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoNi41dncgLSAycHgpO1xcbiAgICAgICAgd2lkdGg6Y2FsYyg2LjV2dyAtIDJweCk7XFxuICAgICAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo3MjBweCkge1xcbiAgICAuYm9hcmRzIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBcXG4gICAgfVxcbiAgICAucGxheWVyQm9hcmQsIC5haUJvYXJke1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgICAgICBjb2x1bW4tZ2FwOjBweDtcXG4gICAgICAgIHdpZHRoOiA0NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiA0NXZ3OztcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5wbGF5ZXJCb2FyZENlbGwsIC5haUJvYXJkQ2VsbCB7XFxuICAgICAgICBoZWlnaHQ6Y2FsYyg0LjV2dyAtIDJweCk7XFxuICAgICAgICB3aWR0aDpjYWxjKDQuNXZ3IC0gMnB4KTtcXG4gICAgICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICB9XFxufVxcbi8qIC5ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcbn0gKi9cXG4ucGxheWVyU2lkZSwgLmFpU2lkZSB7IH1cXG4uYm9hcmRUaXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi8qIC5wbGF5ZXJCb2FyZCwgLmFpQm9hcmR7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBjb2x1bW4tZ2FwOjBweDtcXG4gICAgd2lkdGg6IDQ1dnc7XFxuICAgIGhlaWdodDogNDV2dzs7XFxuICAgIFxcbn1cXG4ucGxheWVyQm9hcmRDZWxsLCAuYWlCb2FyZENlbGwge1xcbiAgICBoZWlnaHQ6Y2FsYyg0LjV2dyAtIDJweCk7XFxuICAgIHdpZHRoOmNhbGMoNC41dncgLSAycHgpO1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbn0gKi9cXG4ucGxheWVyQm9hcmRDZWxsLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4uYWlCb2FyZENlbGwuc2hpcHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAyNDUpOyAqL1xcbn1cXG4uaGl0IHtcXG4gICAgXFxufVxcbi5pbWFnZSB7IFxcblxcbn1cXG4ubGFzdE1vdmUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6NHB4O1xcbn1cXG4ud2luUG9wdXAge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6Y2FsYygyMHZ3IC0gMnB4KTtcXG4gICAgbWFyZ2luLXRvcDo1dmg7XFxuICAgIGJvcmRlcjoycHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzMHZ3O1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxheUFnYWluIHtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jbGFzcyBBSSBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVuZW15UGxheWVyLCBlbmVteUJvYXJkKSB7XG4gICAgc3VwZXIobmFtZSwgZW5lbXlQbGF5ZXIpO1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gICAgdGhpcy5lbmVteVBsYXllciA9IGVuZW15UGxheWVyO1xuICAgIHRoaXMuZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG4gICAgdGhpcy5haUF0dGFja0FycmF5ID0gW107XG4gICAgdGhpcy5ndWVzc0FycmF5ID0gZW5lbXlCb2FyZC5nZXRCb2FyZEFycmF5KCk7XG4gICAgdGhpcy5uZXh0QXR0YWNrQXJyYXkgPSBbXTtcbiAgICB0aGlzLmxhc3RHdWVzc0hpdCA9IGZhbHNlO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKCkge1xuICAgIGlmICh0aGlzLmxhc3RHdWVzc0hpdCAmJiB0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICB0aGlzLmVkdWNhdGVkQXR0YWNrQXJyYXkoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dEF0dGFja0FycmF5Lmxlbmd0aCA+IDAgJiYgdGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgdGhpcy5lZHVjYXRlZEF0dGFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ndWVzc0FycmF5Lmxlbmd0aCk7XG4gICAgICAgIGxldCBhdHRhY2tYWSA9IHRoaXMuZ3Vlc3NBcnJheVtyYW5kb21dO1xuICAgICAgICB0aGlzLmxhc3RHdWVzcyA9IGF0dGFja1hZO1xuICAgICAgICB0aGlzLmd1ZXNzQXJyYXkuc3BsaWNlKHJhbmRvbSwgMSk7XG4gICAgICAgIGlmICh0aGlzLmFpQXR0YWNrQXJyYXkuaW5kZXhPZihhdHRhY2tYWSkgIT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFJIHJhbmRvbSByZWRvXCIpO1xuICAgICAgICAgIHRoaXMucmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5haUF0dGFja0FycmF5LnB1c2goYXR0YWNrWFkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUkgYXR0YWNrOiBcIiArIGF0dGFja1hZKTtcbiAgICAgICAgICB0aGlzLmF0dGFjayhhdHRhY2tYWSwgdGhpcy5lbmVteVBsYXllciwgdGhpcy5lbmVteUJvYXJkKTtcbiAgICAgICAgICB0aGlzLmVuZFR1cm4odGhpcy5lbmVteVBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWR1Y2F0ZWRBdHRhY2tBcnJheSgpIHtcbiAgICB0aGlzLm5leHRBdHRhY2tBcnJheSA9IFtdO1xuICAgIGxldCBsYXN0QXR0YWNrID0gdGhpcy5haUF0dGFja0FycmF5W3RoaXMuYWlBdHRhY2tBcnJheS5sZW5ndGggLSAxXTtcbiAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgbGV0IGxhc3RYID0gYXJyYXlYLmluZGV4T2YobGFzdEF0dGFja1swXSk7XG4gICAgbGV0IGxhc3RZID0gYXJyYXlZLmluZGV4T2YobGFzdEF0dGFja1sxXSk7XG4gICAgaWYgKGFycmF5WFtsYXN0WCAtIDFdKSB7XG4gICAgICB0aGlzLm5leHRBdHRhY2tBcnJheS5wdXNoKGFycmF5WFtsYXN0WCAtIDFdICsgYXJyYXlZW2xhc3RZXSk7XG4gICAgfVxuICAgIGlmIChhcnJheVhbbGFzdFggKyAxXSkge1xuICAgICAgdGhpcy5uZXh0QXR0YWNrQXJyYXkucHVzaChhcnJheVhbbGFzdFggKyAxXSArIGFycmF5WVtsYXN0WV0pO1xuICAgIH1cbiAgICBpZiAoYXJyYXlZW2xhc3RZIC0gMV0pIHtcbiAgICAgIHRoaXMubmV4dEF0dGFja0FycmF5LnB1c2goYXJyYXlYW2xhc3RYXSArIGFycmF5WVtsYXN0WSAtIDFdKTtcbiAgICB9XG4gICAgaWYgKGFycmF5WVtsYXN0WSArIDFdKSB7XG4gICAgICB0aGlzLm5leHRBdHRhY2tBcnJheS5wdXNoKGFycmF5WFtsYXN0WF0gKyBhcnJheVlbbGFzdFkgKyAxXSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMubmV4dEF0dGFja0FycmF5KTtcbiAgICB0aGlzLmVkdWNhdGVkQXR0YWNrKCk7XG4gIH1cbiAgZWR1Y2F0ZWRBdHRhY2soKSB7XG4gICAgbGV0IG5leHRHdWVzcyA9IHRoaXMubmV4dEF0dGFja0FycmF5WzBdO1xuICAgIGlmICh0aGlzLmFpQXR0YWNrQXJyYXkuaW5kZXhPZihuZXh0R3Vlc3MpICE9IC0xKSB7XG4gICAgICB0aGlzLm5leHRBdHRhY2tBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFJIHJhbmRvbSByZWRvXCIpO1xuICAgICAgaWYgKHRoaXMubmV4dEF0dGFja0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5lZHVjYXRlZEF0dGFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yYW5kb21BdHRhY2soKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5haUF0dGFja0FycmF5LnB1c2gobmV4dEd1ZXNzKTtcbiAgICAgIHRoaXMuZ3Vlc3NBcnJheS5zcGxpY2UodGhpcy5ndWVzc0FycmF5LmluZGV4T2YobmV4dEd1ZXNzKSwgMSk7XG4gICAgICB0aGlzLm5leHRBdHRhY2tBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFJIGVkdWNhdGVkIEF0dGFjazpcIiArIG5leHRHdWVzcyk7XG4gICAgICB0aGlzLmF0dGFjayhuZXh0R3Vlc3MsIHRoaXMuZW5lbXlQbGF5ZXIsIHRoaXMuZW5lbXlCb2FyZCk7XG4gICAgICB0aGlzLmVuZFR1cm4odGhpcy5lbmVteVBsYXllcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IEFJIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5idWlsZEJvYXJkKCk7XG4gICAgLy8gdGhpcy5hbGxTaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZEF0dGFja0FycmF5ID0gW107XG4gICAgdGhpcy5oaXRBdHRhY2tBcnJheSA9IFtdO1xuICAgIHRoaXMuc2hpcEFycmF5ID0gW107XG4gICAgdGhpcy5sYXN0TW92ZSA9IFwiXCI7XG4gIH1cbiAgYnVpbGRCb2FyZCgpIHtcbiAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgbGV0IGJvYXJkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5WS5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYm9hcmRBcnJheS5wdXNoKGFycmF5WFtqXSArIGFycmF5WVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBib2FyZEFycmF5O1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIGdldEJvYXJkQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgZ2V0TWlzc2VkQXR0YWNrQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlzc2VkQXR0YWNrQXJyYXk7XG4gIH1cbiAgZ2V0SGl0QXR0YWNrQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0QXR0YWNrQXJyYXk7XG4gIH1cbiAgY2hlY2tTaGlwUGxhY2VtZW50KGNvb3JkaW5hdGVYLCBjb29yZGluYXRlWSwgbGVuZ3RoLCBhbGlnbm1lbnQpIHtcbiAgICBsZXQgY29vcmRpbmF0ZXNYWSA9IGNvb3JkaW5hdGVYICsgY29vcmRpbmF0ZVk7XG4gICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgbGV0IGFycmF5WSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdO1xuICAgIGxldCBjb29yZGluYXRlQXJyYXkgPSBbY29vcmRpbmF0ZXNYWV07XG4gICAgLy8gYWxpZ25tZW50OiBob3Jpem9udGFsID0gMCwgdmVydGljYWwgPSAxXG4gICAgaWYgKGFsaWdubWVudCA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdYID0gYXJyYXlYW2FycmF5WC5pbmRleE9mKGNvb3JkaW5hdGVYKSArIGldO1xuICAgICAgICBjb29yZGluYXRlQXJyYXkucHVzaChuZXdYICsgY29vcmRpbmF0ZVkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlQXJyYXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld1kgPSBhcnJheVlbYXJyYXlZLmluZGV4T2YoY29vcmRpbmF0ZVkpICsgaV07XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheS5wdXNoKGNvb3JkaW5hdGVYICsgbmV3WSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2hpcEFycmF5Lmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3JkaW5hdGVBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5zaGlwQXJyYXlbaV0uY29vcmRpbmF0ZXMuaW5kZXhPZihjb29yZGluYXRlQXJyYXlbal0pICE9IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhbGlnbm1lbnQgPT09IDApIHtcbiAgICAgIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgICAgaWYgKGFycmF5WC5pbmRleE9mKGNvb3JkaW5hdGVYKSA+IDEwIC0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gMSkge1xuICAgICAgbGV0IGFycmF5WSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdO1xuICAgICAgaWYgKGFycmF5WS5pbmRleE9mKGNvb3JkaW5hdGVZKSA+IDEwIC0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVYWSwgbmFtZSwgYWxpZ25tZW50KSB7XG4gICAgLy8gYWxpZ25tZW50OiBob3Jpem9udGFsID0gMCwgdmVydGljYWwgPSAxXG4gICAgaWYgKGFsaWdubWVudCA9PT0gMSkge1xuICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVYWSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5hbWUuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlWCA9IGNvb3JkaW5hdGVYWVswXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVZID0gY29vcmRpbmF0ZVhZWzFdO1xuICAgICAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgICAgIGxldCBpbmRleFkgPSBhcnJheVkuaW5kZXhPZihjb29yZGluYXRlWSk7XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlWSA9IGFycmF5WVtpbmRleFkgKyBpXTtcbiAgICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVYICsgbmV3Q29vcmRpbmF0ZVkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSAwKSB7XG4gICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZVhZKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbmFtZS5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVYID0gY29vcmRpbmF0ZVhZLnN1YnN0cmluZygwLCAxKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVZID0gY29vcmRpbmF0ZVhZLnN1YnN0cmluZygxLCAzKTtcbiAgICAgICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICAgIGxldCBpbmRleFggPSBhcnJheVguaW5kZXhPZihjb29yZGluYXRlWCk7XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlWCA9IGFycmF5WFtpbmRleFggKyBpXTtcbiAgICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKG5ld0Nvb3JkaW5hdGVYICsgY29vcmRpbmF0ZVkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIHRoaXMuYWxsU2hpcENvb3JkaW5hdGVzLnB1c2gobmV3U2hpcC5jb29yZGluYXRlc1tpXSk7XG4gICAgLy8gfVxuICAgIHRoaXMuc2hpcEFycmF5LnB1c2gobmFtZSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLm1pc3NlZEF0dGFja0FycmF5LmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZXMpICE9IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJhbHJlYWR5IGd1ZXNzZWRcIik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhpdEF0dGFja0FycmF5LmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZXMpICE9IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJhbHJlYWR5IGhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zaGlwQXJyYXlbaV0uY29vcmRpbmF0ZXMuaW5kZXhPZihhdHRhY2tDb29yZGluYXRlcykgIT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dpbmcgaGl0OlwiICsgYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgICAgIHRoaXMubGFzdE1vdmUgPSBcIkhpdCBhdDogXCIgKyBhdHRhY2tDb29yZGluYXRlcztcbiAgICAgICAgICB0aGlzLmhpdEF0dGFja0FycmF5LnB1c2goYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgICAgIHRoaXMuc2hpcEFycmF5W2ldLmhpdENvdW50KCk7XG4gICAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBtaXNzOlwiICsgYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgdGhpcy5sYXN0TW92ZSA9IFwiTWlzcyBhdDogXCIgKyBhdHRhY2tDb29yZGluYXRlcztcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrQXJyYXkucHVzaChhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG4gIGFsbFN1bmsoKSB7XG4gICAgbGV0IGFsbFN1bmtTaGlwcyA9IHRydWU7XG4gICAgdGhpcy5zaGlwQXJyYXkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rID09PSBmYWxzZSkge1xuICAgICAgICBhbGxTdW5rU2hpcHMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWxsU3Vua1NoaXBzO1xuICB9XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiLy8gaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gIH1cbiAgY2hlY2tUdXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR1cm47XG4gIH1cbiAgZW5kVHVybihlbmVteVBsYXllcikge1xuICAgIGlmICh0aGlzLnR1cm4gPT0gdHJ1ZSkge1xuICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgfVxuICAgIGVuZW15UGxheWVyLnN0YXJ0VHVybigpO1xuICB9XG4gIHN0YXJ0VHVybigpIHtcbiAgICBpZiAodGhpcy50dXJuID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnR1cm4gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnR1cm4pO1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucmFuZG9tQXR0YWNrKCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLnJhbmRvbUF0dGFjaygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2soY29vcmRpbmF0ZXNYWSwgZW5lbXlQbGF5ZXIsIGVuZW15Qm9hcmQpIHtcbiAgICBpZiAodGhpcy5jaGVja1R1cm4oKSkge1xuICAgICAgaWYgKGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1hZKSA9PSBcImhpdFwiKSB7XG4gICAgICAgIHRoaXMubGFzdEd1ZXNzSGl0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdEd1ZXNzSGl0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmVuZFR1cm4oZW5lbXlQbGF5ZXIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNsYXNzIFNoaXAge1xuICAvL0J1aWxkcyBzaGlwIG9iamVjdHMgdGhhdCBpbmNsdWRlIHRoZWlyIGxlbmd0aCwgbnVtYmVyIG9mIGhpdHMsXG4gIC8vYW5kIHdoZXRoZXIgdGhleSBoYXZlIGJlZW4gc3Vua1xuICAvLyBoaXQoKSBmdW5jdGlvbiB0byBpbmNyZWFzZSAjIG9mICdoaXRzJyBpbiB0aGUgc2hpcFxuICAvLyBpc1N1bmsoKSBjYWxjdWxhdGVzIGJhc2VkIG9uIGxlbmd0aCBhbmQgIyBvZiBoaXRzXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMuc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuaXNTdW5rID0gZmFsc2U7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xuICB9XG4gIGhpdENvdW50KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5zaGlwTGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzU3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzU3VuaztcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi9haVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgSGl0IGZyb20gXCIuL2hpdC5zdmdcIjtcbmltcG9ydCBNaXNzIGZyb20gXCIuL21pc3Muc3ZnXCI7XG5cbi8vUGxheWVyIFNoaXBzXG5sZXQgY2FycmllciA9IG5ldyBTaGlwKDUpO1xubGV0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbmxldCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzKTtcbmxldCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbmxldCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMik7XG4vL0FJIFNoaXBzXG5sZXQgY2FycmllckFJID0gbmV3IFNoaXAoNSk7XG5sZXQgYmF0dGxlc2hpcEFJID0gbmV3IFNoaXAoNCk7XG5sZXQgZGVzdHJveWVyQUkgPSBuZXcgU2hpcCgzKTtcbmxldCBzdWJtYXJpbmVBSSA9IG5ldyBTaGlwKDMpO1xubGV0IHBhdHJvbEJvYXRBSSA9IG5ldyBTaGlwKDIpO1xuLy9HYW1lYm9hcmRzXG5sZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5sZXQgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbi8vUGxheWVyc1xubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoXCJDaGFkXCIpO1xubGV0IGFpID0gbmV3IEFJKFwiQUlcIiwgcGxheWVyLCBwbGF5ZXJCb2FyZCk7XG4vL1Rlc3Qgc2hpcCBwbGFjZW1lbnRzIC0gUGxheWVyXG5cbmxldCBwbGF5ZXJCb2FyZEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckJvYXJkXCIpO1xubGV0IGFpQm9hcmRIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5haUJvYXJkXCIpO1xuLy8gY29uc29sZS5sb2cocGxheWVyQm9hcmQuZ2V0Qm9hcmRBcnJheSgpKTtcblxuY3JlYXRlQm9hcmQoXCJwbGF5ZXJCb2FyZFwiKTtcbmNyZWF0ZUJvYXJkKFwiYWlCb2FyZFwiKTtcblxuLy9QbGF5ZXIgcmFuZG9tIHNoaXAgcGxhY2VtZW50XG5yYW5kb21TaGlwUGxhY2VtZW50KGNhcnJpZXIsIHBsYXllckJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoYmF0dGxlc2hpcCwgcGxheWVyQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChkZXN0cm95ZXIsIHBsYXllckJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoc3VibWFyaW5lLCBwbGF5ZXJCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KHBhdHJvbEJvYXQsIHBsYXllckJvYXJkKTtcbi8vQUkgcmFuZG9tIHNoaXAgcGxhY2VtZW50XG5yYW5kb21TaGlwUGxhY2VtZW50KGNhcnJpZXJBSSwgYWlCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KGJhdHRsZXNoaXBBSSwgYWlCb2FyZCk7XG5yYW5kb21TaGlwUGxhY2VtZW50KGRlc3Ryb3llckFJLCBhaUJvYXJkKTtcbnJhbmRvbVNoaXBQbGFjZW1lbnQoc3VibWFyaW5lQUksIGFpQm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChwYXRyb2xCb2F0QUksIGFpQm9hcmQpO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZE5hbWUpIHtcbiAgbGV0IGJvYXJkTmFtZUhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZE5hbWV9YCk7XG4gIGxldCBjZWxsQm9hcmRDbGFzcyA9IGJvYXJkTmFtZSArIFwiQ2VsbFwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmdldEJvYXJkQXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbEJvYXJkQ2xhc3MpO1xuICAgIGxldCBjZWxsQ2xhc3MgPSBwbGF5ZXJCb2FyZC5nZXRCb2FyZEFycmF5KClbaV07XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDbGFzcyk7XG4gICAgaWYgKGJvYXJkTmFtZSA9PSBcImFpQm9hcmRcIikge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgYXR0YWNrRXZlbnQoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChib2FyZE5hbWUgPT0gXCJwbGF5ZXJCb2FyZFwiKSB7XG4gICAgICAvL2FkZCBzaGlwIHBsYWNlbWVudCBldmVudCBsaXN0ZW5lcidzIGhlcmVcbiAgICB9XG4gICAgYm9hcmROYW1lSFRNTC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxufVxuZnVuY3Rpb24gcmFuZG9tU2hpcFBsYWNlbWVudChzaGlwTmFtZSwgYm9hcmROYW1lKSB7XG4gIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gIGxldCBwbGFjZW1lbnRDb29yZGluYXRlcyA9XG4gICAgYXJyYXlYW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV0gK1xuICAgIGFycmF5WVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAvLyBjb25zb2xlLmxvZyhcIkNoZWNraW5nOlwiICsgcGxhY2VtZW50Q29vcmRpbmF0ZXMpO1xuICBsZXQgYWxpZ25tZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gIGlmIChcbiAgICBib2FyZE5hbWUuY2hlY2tTaGlwUGxhY2VtZW50KFxuICAgICAgcGxhY2VtZW50Q29vcmRpbmF0ZXMuc3Vic3RyaW5nKDAsIDEpLFxuICAgICAgcGxhY2VtZW50Q29vcmRpbmF0ZXMuc3Vic3RyaW5nKDEsIDMpLFxuICAgICAgc2hpcE5hbWUuc2hpcExlbmd0aCxcbiAgICAgIGFsaWdubWVudFxuICAgIClcbiAgKSB7XG4gICAgYm9hcmROYW1lLnBsYWNlU2hpcChwbGFjZW1lbnRDb29yZGluYXRlcywgc2hpcE5hbWUsIGFsaWdubWVudCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTmFtZS5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGxldCBzaGlwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAvLyAgIGAuJHtib2FyZE5hbWV9LiR7c2hpcE5hbWUuY29vcmRpbmF0ZXNbaV19YFxuICAgICAgLy8gKTtcbiAgICAgIGxldCBzaGlwQ2VsbCA9IHNoaXBOYW1lLmNvb3JkaW5hdGVzW2ldO1xuICAgICAgaWYgKGJvYXJkTmFtZSA9PSBwbGF5ZXJCb2FyZCkge1xuICAgICAgICBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnBsYXllckJvYXJkQ2VsbC4ke3NoaXBDZWxsfWBcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcENlbGxIVE1MKTtcbiAgICAgICAgc2hpcENlbGxIVE1MLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZE5hbWUgPT0gYWlCb2FyZCkge1xuICAgICAgICBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFpQm9hcmRDZWxsLiR7c2hpcENlbGx9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBDZWxsSFRNTCk7XG4gICAgICAgIHNoaXBDZWxsSFRNTC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSByYW5kb21TaGlwUGxhY2VtZW50KHNoaXBOYW1lLCBib2FyZE5hbWUpO1xufVxuXG5mdW5jdGlvbiBhdHRhY2tFdmVudChlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwicGxheWVyIGF0dGFjazpcIiArIGVsZW1lbnQuY2xhc3NMaXN0WzFdKTsgLy8gXCJGNVwiXG4gIC8vIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhlbGVtZW50LmNsYXNzTGlzdFsxXSk7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJhbHJlYWR5IGd1ZXNzZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyLmF0dGFjayhlbGVtZW50LmNsYXNzTGlzdFsxXSwgYWksIGFpQm9hcmQpO1xuICAgIGlmIChhaUJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgd2lubmVyKDEpO1xuICAgICAgLy8gYWxlcnQoXCJZb3Ugd2luISEhIVwiKTtcbiAgICB9XG4gICAgdXBkYXRlRGlzcGxheShcImFpQm9hcmRcIiwgYWlCb2FyZCk7XG4gICAgYWkucmFuZG9tQXR0YWNrKCk7XG4gICAgaWYgKHBsYXllckJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgd2lubmVyKDIpO1xuICAgICAgLy8gYWxlcnQoXCJBSSB3aW5zISEhIVwiKTtcbiAgICB9XG4gICAgdXBkYXRlRGlzcGxheShcInBsYXllckJvYXJkXCIsIHBsYXllckJvYXJkKTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheShib2FyZE5hbWUsIGJvYXJkKSB7XG4gIGxldCBib2FyZE5hbWVDZWxsID0gYm9hcmROYW1lICsgXCJDZWxsXCI7XG4gIC8vIGNvbnNvbGUubG9nKGJvYXJkTmFtZUNlbGwpO1xuICAvLyBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFpQm9hcmRDZWxsLiR7c2hpcENlbGx9YCk7XG4gIGxldCBoaXRBcnJheSA9IGJvYXJkLmdldEhpdEF0dGFja0FycmF5KCk7XG4gIGxldCBtaXNzQXJyYXkgPSBib2FyZC5nZXRNaXNzZWRBdHRhY2tBcnJheSgpO1xuICAvLyBjb25zb2xlLmxvZyhoaXRBcnJheSk7XG4gIC8vIGNvbnNvbGUubG9nKG1pc3NBcnJheSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZE5hbWVDZWxsfS4ke2hpdEFycmF5W2ldfWBcbiAgICApO1xuICAgIGlmIChzaGlwQ2VsbEhUTUwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgc2hpcENlbGxIVE1MLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgbGV0IGhpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGhpdC5zcmMgPSBIaXQ7XG4gICAgaGl0LmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgICBoaXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBzaGlwQ2VsbEhUTUwuYXBwZW5kQ2hpbGQoaGl0KTtcbiAgICAvLyBzaGlwQ2VsbEhUTUwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBDZWxsSFRNTCk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBtaXNzQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICBsZXQgc2hpcENlbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZE5hbWVDZWxsfS4ke21pc3NBcnJheVtqXX1gXG4gICAgKTtcbiAgICBpZiAoc2hpcENlbGxIVE1MLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBzaGlwQ2VsbEhUTUwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgbGV0IG1pc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICBtaXNzLnNyYyA9IE1pc3M7XG4gICAgbWlzcy5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG4gICAgbWlzcy5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICBzaGlwQ2VsbEhUTUwuYXBwZW5kQ2hpbGQobWlzcyk7XG4gICAgLy8gc2hpcENlbGxIVE1MLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgfVxuICBsZXQgbGFzdE1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZE5hbWV9YCkucGFyZW50RWxlbWVudFxuICAgIC5jaGlsZE5vZGVzWzVdO1xuICBsYXN0TW92ZS50ZXh0Q29udGVudCA9IGJvYXJkLmxhc3RNb3ZlO1xufVxuZnVuY3Rpb24gd2lubmVyKG51bSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpblBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgbGV0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpO1xuICBpZiAobnVtID09IDEpIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBcIllvdSB3aW4hIVwiO1xuICB9IGVsc2UgaWYgKG51bSA9PSAyKSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gXCJBSSB3aW5zISFcIjtcbiAgfVxuICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5QWdhaW5cIik7XG4gIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG4vLyAgIFNoaXA6IFNoaXAsXG4vLyAgIEdhbWVib2FyZDogR2FtZWJvYXJkLFxuLy8gICBQbGF5ZXI6IFBsYXllcixcbi8vICAgQUk6IEFJLFxuLy8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==