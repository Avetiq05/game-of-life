let LivingCreature = require("./LivingCreature")
module.exports = class grass extends LivingCreature{
    constructor(x,y){
        super(x,y)
           
            this.multiply = 0
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x    , this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y    ],
                [this.x + 1, this.y    ],
                [this.x - 1, this.y + 1],
                [this.x    , this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        
    }

    chooseCell(char){
            let found = []

            for(let i in this.directions){
                    var x  = this.directions[i][0]
                    var y  = this.directions[i][1]
                    if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                            if(matrix[y][x] == char){
                                    found.push(this.directions[i])
                            }
                    }
            }

            return found
    }

    mul(){
        this.multiply++
        var emptyCell = this.chooseCell(0)
        var newCell = emptyCell(Math.floor(Math.random() * emptyCell.length))

            if(this.multiply >= 8 && newCell){
                  var newX  = newCell[0]
                  var newY = newCell[1]

                  matrix[newY][newX] = 1

                  var gr  = new Grass(newX,newY)
                  grassArr.push(gr)
                  this.multiply = 0
            }

    }
}

//modulesasjhiuaqyqu