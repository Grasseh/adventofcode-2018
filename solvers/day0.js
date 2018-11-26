class Solver0{
    solveA(input){
        return new Promise(resolve => {
            let arr = input.split('');
            let result = arr.filter(x => x === '(').length - arr.filter(x => x === ')').length;
            resolve(result);
        });
    }

    solveB(_input){
        return new Promise(resolve => {
            resolve(2);
        });
    }
}

module.exports = Solver0;
