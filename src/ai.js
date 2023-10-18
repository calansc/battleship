import { Player } from "./player";

class AI extends Player {
  constructor(name, enemyPlayer, enemyBoard) {
    super(name, enemyPlayer);
    this.turn = true;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.aiAttackArray = [];
    this.guessArray = enemyBoard.getBoardArray();
    this.nextAttackArray = [];
    this.lastGuessHit = false;
  }

  randomAttack() {
    if (this.lastGuessHit && this.checkTurn()) {
      this.educatedAttackArray();
    } else if (this.nextAttackArray.length > 0 && this.checkTurn()) {
      this.educatedAttack();
    } else {
      if (this.checkTurn()) {
        let random = Math.floor(Math.random() * this.guessArray.length);
        let attackXY = this.guessArray[random];
        this.lastGuess = attackXY;
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
  educatedAttackArray() {
    this.nextAttackArray = [];
    let lastAttack = this.aiAttackArray[this.aiAttackArray.length - 1];
    let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let lastX = arrayX.indexOf(lastAttack[0]);
    let lastY = arrayY.indexOf(lastAttack[1]);
    if (arrayX[lastX - 1]) {
      this.nextAttackArray.push(arrayX[lastX - 1] + arrayY[lastY]);
    }
    if (arrayX[lastX + 1]) {
      this.nextAttackArray.push(arrayX[lastX + 1] + arrayY[lastY]);
    }
    if (arrayY[lastY - 1]) {
      this.nextAttackArray.push(arrayX[lastX] + arrayY[lastY - 1]);
    }
    if (arrayY[lastY + 1]) {
      this.nextAttackArray.push(arrayX[lastX] + arrayY[lastY + 1]);
    }
    console.log(this.nextAttackArray);
    this.educatedAttack();
  }
  educatedAttack() {
    let nextGuess = this.nextAttackArray[0];
    if (this.aiAttackArray.indexOf(nextGuess) != -1) {
      this.nextAttackArray.splice(0, 1);
      console.log("AI random redo");
      if (this.nextAttackArray.length > 0) {
        this.educatedAttack();
      } else {
        this.randomAttack();
      }
    } else {
      this.aiAttackArray.push(nextGuess);
      this.guessArray.splice(this.guessArray.indexOf(nextGuess), 1);
      this.nextAttackArray.splice(0, 1);
      console.log("AI educated Attack:" + nextGuess);
      this.attack(nextGuess, this.enemyPlayer, this.enemyBoard);
      this.endTurn(this.enemyPlayer);
    }
  }
}

export { AI };
