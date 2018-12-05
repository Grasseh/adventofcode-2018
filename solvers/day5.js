class Solver{
    solveA(input){
        return new Promise(resolve => {
            let str = input.slice(0, -1);
            str = this.reactPolymer(str);
            resolve(str.length);
        });
    }

    solveB(input){
        return new Promise((resolve) => {
            let str = input.slice(0, -1);
            let arr = 'qwertyuiopasdfghjklzxcvbnm'.split('');
            let result = arr.reduce((best, letter) => {
                let preparedPoly = str.replace(new RegExp(letter.toUpperCase(), 'g'), '').replace(new RegExp(letter, 'g'), '');
                let length = this.reactPolymer(preparedPoly).length;
                return Math.min(length, best);
            }, str.length);
            resolve(result);
        });
    }

    reactPolymer(str){
        let previous = '1';
        let i = 0;
        while(i < str.length){
            if(String.fromCharCode(str.charCodeAt(i) + 32) === previous || String.fromCharCode(str.charCodeAt(i) - 32) === previous){
                str = str.substring(0, i-1) + str.substring(i+1);
                i -= 1;
                previous = str[i-1];
                continue;
            }
            previous = str[i];
            i++;
        }
        return str;
    }
}

module.exports = Solver;
