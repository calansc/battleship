/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

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
    return this.hits;
  }
  isSunkCheck() {
    if (this.hits >= this.shipLength) {
      this.isSunk = true;
    }
    return this.isSunk;
  }
}

class Gameboard {
  constructor() {
    this.board = this.buildBoard();
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
  placeShip(coordinateXY, length, alignment, name) {
    // alignment: horizontal = 0, vertical = 1
    name = new Ship(length);
    if (alignment === 1) {
      name.coordinates.push(coordinateXY);
      for (let i = 1; i < length; i++) {
        let coordinateX = coordinateXY[0];
        let coordinateY = coordinateXY[1];
        let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let indexX = arrayX.indexOf(coordinateX);
        let indexY = arrayY.indexOf(coordinateY);
        let newCoordinateX = arrayX[indexX + i];
        let newCoordinateY = arrayY[indexY + i];
        name.coordinates.push(newCoordinateX + newCoordinateY);
      }
    }
  }
}
let gameboard = new Gameboard();
console.log(gameboard);
module.exports = {
  Ship: Ship,
  Gameboard: Gameboard,
};


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QyxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwIHtcbiAgLy9CdWlsZHMgc2hpcCBvYmplY3RzIHRoYXQgaW5jbHVkZSB0aGVpciBsZW5ndGgsIG51bWJlciBvZiBoaXRzLFxuICAvL2FuZCB3aGV0aGVyIHRoZXkgaGF2ZSBiZWVuIHN1bmtcbiAgLy8gaGl0KCkgZnVuY3Rpb24gdG8gaW5jcmVhc2UgIyBvZiAnaGl0cycgaW4gdGhlIHNoaXBcbiAgLy8gaXNTdW5rKCkgY2FsY3VsYXRlcyBiYXNlZCBvbiBsZW5ndGggYW5kICMgb2YgaGl0c1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLnNoaXBMZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcbiAgfVxuICBoaXRDb3VudCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9XG4gIGlzU3Vua0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5zaGlwTGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzU3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzU3VuaztcbiAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5idWlsZEJvYXJkKCk7XG4gIH1cbiAgYnVpbGRCb2FyZCgpIHtcbiAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICBsZXQgYXJyYXlZID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgbGV0IGJvYXJkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5WS5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYm9hcmRBcnJheS5wdXNoKGFycmF5WFtqXSArIGFycmF5WVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBib2FyZEFycmF5O1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIHBsYWNlU2hpcChjb29yZGluYXRlWFksIGxlbmd0aCwgYWxpZ25tZW50LCBuYW1lKSB7XG4gICAgLy8gYWxpZ25tZW50OiBob3Jpem9udGFsID0gMCwgdmVydGljYWwgPSAxXG4gICAgbmFtZSA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgaWYgKGFsaWdubWVudCA9PT0gMSkge1xuICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVYWSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlWCA9IGNvb3JkaW5hdGVYWVswXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVZID0gY29vcmRpbmF0ZVhZWzFdO1xuICAgICAgICBsZXQgYXJyYXlYID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICAgICAgbGV0IGFycmF5WSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdO1xuICAgICAgICBsZXQgaW5kZXhYID0gYXJyYXlYLmluZGV4T2YoY29vcmRpbmF0ZVgpO1xuICAgICAgICBsZXQgaW5kZXhZID0gYXJyYXlZLmluZGV4T2YoY29vcmRpbmF0ZVkpO1xuICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZVggPSBhcnJheVhbaW5kZXhYICsgaV07XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlWSA9IGFycmF5WVtpbmRleFkgKyBpXTtcbiAgICAgICAgbmFtZS5jb29yZGluYXRlcy5wdXNoKG5ld0Nvb3JkaW5hdGVYICsgbmV3Q29vcmRpbmF0ZVkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxubGV0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnNvbGUubG9nKGdhbWVib2FyZCk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU2hpcDogU2hpcCxcbiAgR2FtZWJvYXJkOiBHYW1lYm9hcmQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9