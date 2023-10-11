/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        let coordinateX = coordinateXY[0];
        let coordinateY = coordinateXY[1];
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
      return "guess again";
    } else {
      for (let i = 0; i < this.shipArray.length; i++) {
        if (this.shipArray[i].coordinates.indexOf(attackCoordinates) != -1) {
          return this.shipArray[i].hitCount();
        }
      }
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
/******/ 			// no module.id needed
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

let playerBoardHTML = document.querySelector(".playerBoard");
let aiBoardHTML = document.querySelector(".aiBoard");
console.log(playerBoardHTML);
console.log(aiBoardHTML);

// module.exports = {
//   Ship: Ship,
//   Gameboard: Gameboard,
//   Player: Player,
//   AI: AI,
// };

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDLGlCQUFpQiwyQ0FBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVjOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJnQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkMsc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7QUM1RXJCLFlBQVksWUFBWTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7OztVQ3BCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNWO0FBQ0k7QUFDUjs7QUFFMUI7QUFDQSxrQkFBa0IsdUNBQUk7QUFDdEIscUJBQXFCLHVDQUFJO0FBQ3pCLG9CQUFvQix1Q0FBSTtBQUN4QixvQkFBb0IsdUNBQUk7QUFDeEIscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0Esb0JBQW9CLHVDQUFJO0FBQ3hCLHVCQUF1Qix1Q0FBSTtBQUMzQixzQkFBc0IsdUNBQUk7QUFDMUIsc0JBQXNCLHVDQUFJO0FBQzFCLHVCQUF1Qix1Q0FBSTtBQUMzQjtBQUNBLHNCQUFzQixpREFBUztBQUMvQixrQkFBa0IsaURBQVM7QUFDM0I7QUFDQSxpQkFBaUIsMkNBQU07QUFDdkIsYUFBYSxtQ0FBRTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbmVteVBsYXllciwgZW5lbXlCb2FyZCkge1xuICAgIHN1cGVyKG5hbWUsIGVuZW15UGxheWVyKTtcbiAgICB0aGlzLnR1cm4gPSB0cnVlO1xuICAgIHRoaXMuZW5lbXlQbGF5ZXIgPSBlbmVteVBsYXllcjtcbiAgICB0aGlzLmVuZW15Qm9hcmQgPSBlbmVteUJvYXJkO1xuICAgIHRoaXMuYWlBdHRhY2tBcnJheSA9IFtdO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKCkge1xuICAgIGlmICh0aGlzLmNoZWNrVHVybigpKSB7XG4gICAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICAgIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgICAgIGxldCB4ID0gYXJyYXlYW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICBsZXQgeSA9IGFycmF5WVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgbGV0IGF0dGFja1hZID0geCArIHk7XG4gICAgICBpZiAodGhpcy5haUF0dGFja0FycmF5LmluZGV4T2YoYXR0YWNrWFkpICE9IC0xKSB7XG4gICAgICAgIHJhbmRvbUF0dGFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5haUF0dGFja0FycmF5LnB1c2goYXR0YWNrWFkpO1xuICAgICAgICByZXR1cm4gYXR0YWNrWFk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IEFJIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5idWlsZEJvYXJkKCk7XG4gICAgLy8gdGhpcy5hbGxTaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICB0aGlzLm1pc3NlZEF0dGFja0FycmF5ID0gW107XG4gICAgdGhpcy5zaGlwQXJyYXkgPSBbXTtcbiAgfVxuICBidWlsZEJvYXJkKCkge1xuICAgIGxldCBhcnJheVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgICBsZXQgYm9hcmRBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlZLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5WC5sZW5ndGg7IGorKykge1xuICAgICAgICBib2FyZEFycmF5LnB1c2goYXJyYXlYW2pdICsgYXJyYXlZW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkQXJyYXk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgZ2V0Qm9hcmRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuICBwbGFjZVNoaXAoY29vcmRpbmF0ZVhZLCBuYW1lLCBhbGlnbm1lbnQpIHtcbiAgICAvLyBhbGlnbm1lbnQ6IGhvcml6b250YWwgPSAwLCB2ZXJ0aWNhbCA9IDFcbiAgICBpZiAoYWxpZ25tZW50ID09PSAxKSB7XG4gICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZVhZKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbmFtZS5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVYID0gY29vcmRpbmF0ZVhZWzBdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZVkgPSBjb29yZGluYXRlWFlbMV07XG4gICAgICAgIGxldCBhcnJheVkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgICAgICAgbGV0IGluZGV4WSA9IGFycmF5WS5pbmRleE9mKGNvb3JkaW5hdGVZKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVZID0gYXJyYXlZW2luZGV4WSArIGldO1xuICAgICAgICBuYW1lLmNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZVggKyBuZXdDb29yZGluYXRlWSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09IDApIHtcbiAgICAgIG5hbWUuY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlWFkpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuYW1lLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZVggPSBjb29yZGluYXRlWFlbMF07XG4gICAgICAgIGxldCBjb29yZGluYXRlWSA9IGNvb3JkaW5hdGVYWVsxXTtcbiAgICAgICAgbGV0IGFycmF5WCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICAgIGxldCBpbmRleFggPSBhcnJheVguaW5kZXhPZihjb29yZGluYXRlWCk7XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlWCA9IGFycmF5WFtpbmRleFggKyBpXTtcbiAgICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKG5ld0Nvb3JkaW5hdGVYICsgY29vcmRpbmF0ZVkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NoaXAuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIHRoaXMuYWxsU2hpcENvb3JkaW5hdGVzLnB1c2gobmV3U2hpcC5jb29yZGluYXRlc1tpXSk7XG4gICAgLy8gfVxuICAgIHRoaXMuc2hpcEFycmF5LnB1c2gobmFtZSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLm1pc3NlZEF0dGFja0FycmF5LmluZGV4T2YoYXR0YWNrQ29vcmRpbmF0ZXMpICE9IC0xKSB7XG4gICAgICByZXR1cm4gXCJndWVzcyBhZ2FpblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBBcnJheVtpXS5jb29yZGluYXRlcy5pbmRleE9mKGF0dGFja0Nvb3JkaW5hdGVzKSAhPSAtMSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBBcnJheVtpXS5oaXRDb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5taXNzZWRBdHRhY2tBcnJheS5wdXNoKGF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH1cbiAgYWxsU3VuaygpIHtcbiAgICBsZXQgYWxsU3Vua1NoaXBzID0gdHJ1ZTtcbiAgICB0aGlzLnNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIGFsbFN1bmtTaGlwcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rU2hpcHM7XG4gIH1cbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCIvLyBpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gdHJ1ZTtcbiAgfVxuICBjaGVja1R1cm4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHVybjtcbiAgfVxuICBlbmRUdXJuKGVuZW15UGxheWVyKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2soY29vcmRpbmF0ZXNYWSwgZW5lbXlQbGF5ZXIsIGVuZW15Qm9hcmQpIHtcbiAgICBpZiAodGhpcy5jaGVja3R1cm4oKSkge1xuICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWFkpO1xuICAgICAgdGhpcy5lbmRUdXJuKGVuZW15UGxheWVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjbGFzcyBTaGlwIHtcbiAgLy9CdWlsZHMgc2hpcCBvYmplY3RzIHRoYXQgaW5jbHVkZSB0aGVpciBsZW5ndGgsIG51bWJlciBvZiBoaXRzLFxuICAvL2FuZCB3aGV0aGVyIHRoZXkgaGF2ZSBiZWVuIHN1bmtcbiAgLy8gaGl0KCkgZnVuY3Rpb24gdG8gaW5jcmVhc2UgIyBvZiAnaGl0cycgaW4gdGhlIHNoaXBcbiAgLy8gaXNTdW5rKCkgY2FsY3VsYXRlcyBiYXNlZCBvbiBsZW5ndGggYW5kICMgb2YgaGl0c1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLnNoaXBMZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcbiAgfVxuICBoaXRDb3VudCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICBpZiAodGhpcy5oaXRzID49IHRoaXMuc2hpcExlbmd0aCkge1xuICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1N1bms7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IEFJIH0gZnJvbSBcIi4vYWlcIjtcblxuLy9QbGF5ZXIgU2hpcHNcbmxldCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xubGV0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMpO1xubGV0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xubGV0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyKTtcbi8vQUkgU2hpcHNcbmxldCBjYXJyaWVyQUkgPSBuZXcgU2hpcCg1KTtcbmxldCBiYXR0bGVzaGlwQUkgPSBuZXcgU2hpcCg0KTtcbmxldCBkZXN0cm95ZXJBSSA9IG5ldyBTaGlwKDMpO1xubGV0IHN1Ym1hcmluZUFJID0gbmV3IFNoaXAoMyk7XG5sZXQgcGF0cm9sQm9hdEFJID0gbmV3IFNoaXAoMik7XG4vL0dhbWVib2FyZHNcbmxldCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBhaUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuLy9QbGF5ZXJzXG5sZXQgcGxheWVyID0gbmV3IFBsYXllcihcIkNoYWRcIik7XG5sZXQgYWkgPSBuZXcgQUkoXCJBSVwiLCBwbGF5ZXIsIHBsYXllckJvYXJkKTtcblxubGV0IHBsYXllckJvYXJkSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyQm9hcmRcIik7XG5sZXQgYWlCb2FyZEhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFpQm9hcmRcIik7XG5jb25zb2xlLmxvZyhwbGF5ZXJCb2FyZEhUTUwpO1xuY29uc29sZS5sb2coYWlCb2FyZEhUTUwpO1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcbi8vICAgU2hpcDogU2hpcCxcbi8vICAgR2FtZWJvYXJkOiBHYW1lYm9hcmQsXG4vLyAgIFBsYXllcjogUGxheWVyLFxuLy8gICBBSTogQUksXG4vLyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9