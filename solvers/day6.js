class Solver{
    constructor(){
        this.safeValue = 10000;
    }

    solveA(input){
        return new Promise(resolve => {
            let coords = input
                .slice(0, -1)
                .split('\n')
                .map(this.parseLine);
            let grid = this.fillGrid(coords);
            let most = 0;
            let test = [];
            for(let k = 0; k < coords.length; k++){
                let area = 0;
                for(let i = 0; i < grid.xSize + 1; i++){
                    for(let j = 0; j < grid.ySize; j++){
                        if(grid.grid[i][j] === k){
                            if(i === 0 || j === 0 || i === grid.xSize || j === grid.ySize){
                                area = -100000;
                            }
                            area++;
                        }
                    }
                }
                most = Math.max(most, area);
                test[k] = area;
            }
            resolve(most);
        });
    }

    solveB(input){
        return new Promise((resolve) => {
            let coords = input
                .slice(0, -1)
                .split('\n')
                .map(this.parseLine);
            let xSize = Math.max.apply(Math, coords.map(function(o) { return o.x + 1; }));
            let ySize = Math.max.apply(Math, coords.map(function(o) { return o.y + 1; }));
            let count = 0;
            for(let i = 0; i < xSize + 1; i++){
                for(let j = 0; j < ySize; j++){
                    let value = 0;
                    for(let k of coords){
                        let distance = this.manhattan(i, k.y, j, k.x);
                        value += distance;
                    }
                    if(value < this.safeValue){
                        count++;
                    }
                }
            }
            resolve(count);
        });
    }

    parseLine(line){
        let expr = /(\d+), (\d+)/;
        let matches = line.match(expr);
        return {
            x : parseInt(matches[1]),
            y : parseInt(matches[2]),
        };
    }

    manhattan(x1, x2, y1, y2){
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }

    fillGrid(coordinates){
        let xSize = Math.max.apply(Math, coordinates.map(function(o) { return o.x + 1; }));
        let ySize = Math.max.apply(Math, coordinates.map(function(o) { return o.y + 1; }));
        let grid = new Array(xSize);
        let highest = coordinates.length;
        for(let i = 0; i < xSize+1; i++){
            grid[i] = new Array(ySize).fill('-');
        }
        for(let i = 0; i < xSize + 1; i++){
            for(let j = 0; j < ySize; j++){
                let shortest = 100000;
                let closest = [];
                for(let k = 0; k < coordinates.length; k++){
                    let line = coordinates[k];
                    let distance = this.manhattan(i, line.y, j, line.x);
                    if(distance < shortest){
                        closest = [k];
                        shortest = distance;
                        continue;
                    }
                    if(distance === shortest){
                        closest.push(k);
                    }
                }
                if(closest.length === 1){
                    //grid[i][j] = String.fromCharCode(closest[0] + 65);
                    grid[i][j] = closest[0];
                }
            }
        }
        return {
            grid, xSize, ySize, highest
        };

    }
}

module.exports = Solver;
