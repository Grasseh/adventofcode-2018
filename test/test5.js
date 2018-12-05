/* global describe, it */
const Solver = require('../solvers/day5.js');
const assert = require('assert');
let solver = new Solver();

describe('Day 5', () => {
    describe('Puzzle A', () => {
        it('Should be 0 characters on aA', async () => {
            let input = 'aA\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should be 0 characters on abBA', async () => {
            let input = 'abBA\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should be 4 characters on abAB', async () => {
            let input = 'abAB\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 4);
        });

        it('Should be 6 characters on aabAAB', async () => {
            let input = 'aabAAB\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 6);
        });

        it('Should be 10 characters on dabAcCaCBAcCcaDA', async () => {
            let input = 'dabAcCaCBAcCcaDA\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 10);
        });
    });

    describe('Puzzle B', () => {
        it('should equal 4 with dabAcCaCBAcCcaDA', async () => {
            let input = 'dabAcCaCBAcCcaDA\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 4);
        });
    });
});
