/* global describe, it */
const Solver = require('../solvers/day7.js');
const assert = require('assert');
let solver = new Solver();

describe('Day 7', () => {
    let input = 'Step C must be finished before step A can begin.\n' + 
        'Step C must be finished before step F can begin.\n' + 
        'Step A must be finished before step B can begin.\n' + 
        'Step A must be finished before step D can begin.\n' + 
        'Step B must be finished before step E can begin.\n' + 
        'Step D must be finished before step E can begin.\n' + 
        'Step F must be finished before step E can begin.\n';

    describe('Puzzle A', () => {
        it('Should be CABDFE with small input', async () => {
            let result = await solver.solveA(input);
            assert.strictEqual(result, 'CABDFE');
        });
    });

    describe('Puzzle B', () => {
        it('should equal 15 seconds', async () => {
            solver.workerCount = 2;
            solver.baseTime = 0;
            solver.notDone = 'ABCDEF'.split('');
            let result = await solver.solveB(input);
            assert.strictEqual(result, 15);
        });
    });
});
