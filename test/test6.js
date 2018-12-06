/* global describe, it */
const Solver = require('../solvers/day6.js');
const assert = require('assert');
let solver = new Solver();

describe('Day 6', () => {
    describe('Puzzle A', () => {
        it('Should be 17 squares on grid', async () => {
            let input = '1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 17);
        });
    });

    describe('Puzzle B', () => {
        it('should equal 16 with same grid', async () => {
            let input = '1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9\n';
            solver.safeValue = 32;
            let result = await solver.solveB(input);
            assert.strictEqual(result, 16);
        });
    });
});
