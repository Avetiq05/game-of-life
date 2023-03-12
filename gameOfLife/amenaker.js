class Amenaker extends LivingCreature {
    constructor(x, y) {
        super(x, y)

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
    chooseCell(char, char1, char2) {
        this.getNewCoordinates();
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }


        }

        return found;
    }

    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell && this.energy > 5) {

            let newX = newCell[0];
            let newY = newCell[1];

            let amenaker = new Amenaker(newX, newY);
            matrix[newY][newX] = 4;
            amenakerArr.push(amenaker);

            this.energy = 12;
        }
    }
    eat() {
        let emptyCell = this.chooseCell(2, 3, 5);
        let newCell = random(emptyCell)
        console.log(newCell);

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < poisonArr.length; i++) {
                if (poisonArr[i].x == newX && poisonArr[i].y == newY) {
                    poisonArr.splice(i, 1)
                    break;
                }
            }
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 20) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 1) {
                this.die()
            }
        }
    }

    die() {
        for (let i = 0; i < amenakerArr.length; i++) {
            if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                amenakerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

