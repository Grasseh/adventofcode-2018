var program = require('commander');
var fs = require('fs');

program
    .option('-p --problem [problem]', 'Problem Day', /^[12]?[0-9]$/i, '0')
    .parse(process.argv);

console.log('You selected the following parameters:');
console.log(`problem: ${program.problem}`);

var SolverClass = require(`./solvers/day${program.problem}`);
var solver = new SolverClass();
var input = fs.readFileSync(`inputs/day${program.problem}.txt`, 'utf-8');
solveA().then(displayA).then(solveB).then(displayB);
function solveA(){
    console.time('Problem A');
    return solver.solveA(input);
}
function solveB(){
    console.time('Problem B');
    return solver.solveB(input);
}
function displayA(solutionA){
    console.timeEnd('Problem A');
    console.log(`Solution to Problem A: ${solutionA}`);
    return;
}
function displayB(solutionB){
    console.timeEnd('Problem B');
    console.log(`Solution to Problem B: ${solutionB}`);
    return;
}
