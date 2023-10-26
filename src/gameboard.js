import { Ship } from "./ship";

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

export { Gameboard };
