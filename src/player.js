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

export { Player };
