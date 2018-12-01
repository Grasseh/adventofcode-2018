class Solver{
    solveA(input){
        return new Promise(resolve => {
            let arr = input.slice(0, -1).split('\n');
            const sum = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
            let result = arr.map(x => x[0] === '+' ? x.substring(1) : x).reduce(sum, 0);
            resolve(result);
        });
    }

    solveB(input){
        return new Promise(resolve => {
            let arr = input.slice(0, -1).split('\n').map(x => x[0] === '+' ? x.substring(1) : x).map( x => parseInt(x, 10));
            let visited = [];
            let i = 0;
            let state = 0;
            while(!visited.includes(state)){
                visited.push(state);
                state += arr[i];
                i++;
                if(i >= arr.length){
                    i = 0;
                }
            }
            resolve(state);
        });
    }
}

module.exports = Solver;
