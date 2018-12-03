class Solver{
    solveA(input){
        return new Promise(resolve => {
            this.doubles = 0;
            this.initializeGrid();
            input
                .slice(0, -1)
                .split('\n')
                .map(this.parseLine)
                .forEach(this.fillGrid.bind(this));
            resolve(this.doubles);
        });
    }

    solveB(input){
        return new Promise((resolve) => {
            this.doubles = 0;
            this.initializeGrid();
            let arr = input
                .slice(0, -1)
                .split('\n')
                .map(this.parseLine);
            arr.forEach(this.fillGrid.bind(this));
            arr.every(line => {
                for(let i = line.x; i < line.x + line.width; i++){
                    for(let j = line.y; j < line.y + line.height; j++){
                        let currentCovers = this.grid[i + 1000 * j];
                        if (currentCovers !== 1)
                            return true;
                    }
                }
                resolve(line.id);
                return false;
            });
        });
    }

    parseLine(line){
        let expr = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/; 
        let matches = line.match(expr);     
        return {
            id : parseInt(matches[1]),
            x : parseInt(matches[2]),
            y : parseInt(matches[3]),
            width : parseInt(matches[4]),
            height : parseInt(matches[5]),
        };
    }

    initializeGrid(){
        this.grid = Array(1000000).fill(0);
    }

    fillGrid(line){
        for(let i = line.x; i < line.x + line.width; i++){
            for(let j = line.y; j < line.y + line.height; j++){
                let currentCovers = this.grid[i + 1000 * j];
                if (currentCovers === 1)
                    this.doubles++;
                this.grid[i + 1000 * j] = currentCovers + 1;
            }
        }
    }
}

module.exports = Solver;
