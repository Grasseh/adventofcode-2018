class Solver0{
    solveA(input){
        return new Promise(resolve => {
            let arr = input.split('');
            let result = arr.filter(x => x === '(').length - arr.filter(x => x === ')').length;
            resolve(result);
        });
    }

    solveB(input){
        return new Promise(resolve => {
            let arr = input.split('');
            let count = 0;
            let state = 0;
            for (let x of arr){
                if (x === '(')
                    state++;
                else
                    state--;
                count++;
                if(state < 0){
                    resolve(count);   
                    break;
                }
            }
        });
    }
}

module.exports = Solver0;
