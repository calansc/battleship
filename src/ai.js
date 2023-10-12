import { Player } from "./player";

class AI extends Player {
  constructor(name, enemyPlayer, enemyBoard) {
    super(name, enemyPlayer);
    this.turn = true;
    this.enemyPlayer = enemyPlayer;
    this.enemyBoard = enemyBoard;
    this.aiAttackArray = [];
  }

  randomAttack() {
    console.log("AI start random attack");
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
        console.log("AI attack to make: " + attackXY);
        // this.attack(attackXY, player, playerBoard);
      }
    }
  }
}

export { AI };
