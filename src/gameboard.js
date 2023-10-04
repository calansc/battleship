import { Ship } from "./ship";

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
    for (let i = 0; i < this.shipArray.length; i++) {
      if (this.shipArray[i].coordinates.indexOf(attackCoordinates) != -1) {
        return this.shipArray[i].hitCount();
      }
    }
    return this.missedAttackArray.push(attackCoordinates);
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
