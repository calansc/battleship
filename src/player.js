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
    if (typeof this.randomAttack() === "function") {
      this.randomAttack();
    }
  }

  attack(coordinatesXY, enemyPlayer, enemyBoard) {
    if (this.checkTurn()) {
      enemyBoard.receiveAttack(coordinatesXY);
      this.endTurn(enemyPlayer);
    }
  }
}

export { Player };
