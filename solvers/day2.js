class Solver{
    solveA(input){
        return new Promise(resolve => {
            let arr = input.slice(0, -1).split('\n');
            let globalAcc = arr.reduce((globalAccumulator, line) => {
                let acc = line.split('').reduce((accumulator, letter) => {
                    accumulator[letter] = (accumulator[letter] || 0) + 1;
                    return accumulator;
                }, {});
                let set = new Set(Object.values(acc));
                for(let elem of set){
                    globalAccumulator[elem] = (globalAccumulator[elem] || 0) + 1;
                }
                return globalAccumulator;
            }, {'2' : 0, '3': 0});
            let result = globalAcc['2'] * globalAcc['3'];
            resolve(result);
        });
    }

    solveB(input){
        return new Promise((resolve, reject) => {
            let arr = input.slice(0, -1).split('\n');
            let goal = arr[0].length - 1;
            for(let line of arr){
                for(let line2 of arr){
                    let word = '';
                    for(let i = 0; i < line.length; i++){
                        if(line[i] === line2[i]){
                            word += line[i];
                        }
                    }
                    if(word.length === goal){
                        resolve(word);
                        return;
                    }
                }
            }
        });
    }
}

module.exports = Solver;
