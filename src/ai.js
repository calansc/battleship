import { Player } from "./player";

class AI extends Player {
  constructor(name, enemyPlayer, enemyBoard) {
    super(name, enemyPlayer);
    this.turn = true;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.aiAttackArray = [];
    this.guessArray = enemyBoard.getBoardArray();
    // this.lastGuessHit = false;
  }

  randomAttack() {
    if (this.checkTurn()) {
      let random = Math.floor(Math.random() * this.guessArray.length);
      let attackXY = this.guessArray[random];
      this.guessArray.splice(random, 1);
      if (this.aiAttackArray.indexOf(attackXY) != -1) {
        console.log("AI random redo");
        randomAttack();
      } else {
        this.aiAttackArray.push(attackXY);
        console.log("AI attack: " + attackXY);
        this.attack(attackXY, this.enemyPlayer, this.enemyBoard);
        this.endTurn(this.enemyPlayer);
      }
    }
  }
}

export { AI };
