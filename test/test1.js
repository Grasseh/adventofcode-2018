/* global describe, it */
let solver = new (require('../solvers/day1'))();
let assert = require('assert');

describe('Day 1', () => {
    describe('Puzzle A', () => {
        it('+1+1+1 = 3', async () => {
            let input = '+1\n+1\n+1\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('should equal 0 on +1+1-2', async () => {
            let input = '+1\n+1\n-2\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('should equal -6 on -1-2-3', async () => {
            let input = '-1\n-2\n-3\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, -6);
        });
    });

    describe('Puzzle B', () => {
        it('should equal 0 on +1-1', async () => {
            let input = '+1\n-1\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 0);
        });

        it('should equal 10 on +3+3+4-2-4', async () => {
            let input = '+3\n+3\n+4\n-2\n-4\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 10);
        });

        it('should equal 5 on -6, +3, +8, +5, -6', async () => {
            let input = '-6\n+3\n+8\n+5\n-6\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 5);
        });

        it('should equal 14 on +7, +7, -2, -7, -4', async () => {
            let input = '+7\n+7\n-2\n-7\n-4\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 14);
        });
    });
});
