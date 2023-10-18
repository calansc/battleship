import { Player } from "./player";

class AI extends Player {
  constructor(name, enemyPlayer, enemyBoard) {
    super(name, enemyPlayer);
    this.turn = true;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.aiAttackArray = [];
    this.guessArray = enemyBoard.getBoardArray();
    this.lastGuessIndex = "undefined";
    this.lastGuessHit = false;
  }

  randomAttack() {
    if (this.lastGuessHit && this.checkTurn()) {
      let lastGuess = this.aiAttackArray[this.aiAttackArray.length - 1];
      // console.log(lastGuess);
      console.log("Last guess index:" + this.lastGuessIndex);
      let guessAdjustment = [-9, -1, 0, 9];
      let nextGuessIndex =
        this.lastGuessIndex + guessAdjustment[Math.floor(Math.random() * 4)];
      console.log("Next guess index:" + nextGuessIndex);
      let nextGuess = this.guessArray[nextGuessIndex];
      console.log("Next guess:" + nextGuess);
      if (this.aiAttackArray.indexOf(nextGuess) != -1) {
        console.log("AI random redo");
        this.randomAttack();
      } else {
        this.aiAttackArray.push(nextGuess);
        this.guessArray.splice(nextGuess, 1);
        console.log("AI educated Attack:" + nextGuess);
        this.attack(nextGuess, this.enemyPlayer, this.enemyBoard);
        this.endTurn(this.enemyPlayer);
      }
    } else {
      // console.log(this.lastGuessHit);
      if (this.checkTurn()) {
        let random = Math.floor(Math.random() * this.guessArray.length);
        let attackXY = this.guessArray[random];
        this.lastGuessIndex = random;
        console.log(this.lastGuessIndex);
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
}

export { AI };
