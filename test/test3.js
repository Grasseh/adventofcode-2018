/* global describe, it */
const Solver = require('../solvers/day3.js');
const assert = require('assert');
let solver = new Solver();

describe('Day 3', () => {
    describe('Puzzle A', () => {
        it('Should be 4 inches of fabric on only input', async () => {
            let input = '#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 4);
        });
    });

    describe('Puzzle B', () => {
        it('should equal 3 as only safe claim', async () => {
            let input = '#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 3);
        });
    });
});
