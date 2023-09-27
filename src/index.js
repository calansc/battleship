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
  placeShip(coordinateXY, length) {}
}
let gameboard = new Gameboard();
console.log(gameboard);
module.exports = {
  Ship: Ship,
  Gameboard: Gameboard,
};
