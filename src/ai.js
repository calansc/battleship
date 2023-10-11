class AI {
  constructor(name, enemyPlayer, enemyBoard) {
    this.turn = true;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.aiAttackArray = [];
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

export { AI };
