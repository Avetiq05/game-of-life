let LivingCreature = require("./LivingCreature")
module.exports = class poison  extends LivingCreature{
    constructor(x,y){
        super(x,y)
             
              this.energy = 12
              this.directions = []
    }


    getNewCoordinates() {
      this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
      ];
  }
  chooseCell(char,) {
    this.getNewCoordinates();
    let found = [];

    for (let i in this.directions) {
        let x = this.directions[i][0];
        let y = this.directions[i][1];

        if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
            if (matrix[y][x] == char) {
            }
        }
        
    }

        return found
    mul()
    {

        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell(Math.floor(Math.random() * emptyCell.length))

        if (newCell && this.energy > 5) {

            let newX = newCell[0];
            let newY = newCell[1];

            let pois= new Poison(newX, newY);
            matrix[newY][newX] = 5;
        poisonArr.push(pois);

            this.energy = 12;
        }
    }

}

}
