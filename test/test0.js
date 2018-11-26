/* global describe, it */
let solver = new (require('../solvers/day0'))();
let assert = require('assert');

describe('Day 0', () => {
    describe('Puzzle A', () => {
        it('should equal 0 on (())', async () => {
            let input = '(())';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('should equal 0 on ()()', async () => {
            let input = '()()';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('should equal 3 on (((', async () => {
            let input = '(((';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('should equal 3 on (()(()(', async () => {
            let input = '(()(()(';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('should equal 3 on ))(((((', async () => {
            let input = '))(((((';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('should equal -1 on ())', async () => {
            let input = '())';
            let result = await solver.solveA(input);
            assert.strictEqual(result, -1);
        });

        it('should equal -1 on ))(', async () => {
            let input = '))(';
            let result = await solver.solveA(input);
            assert.strictEqual(result, -1);
        });

        it('should equal -3 on )))', async () => {
            let input = ')))';
            let result = await solver.solveA(input);
            assert.strictEqual(result, -3);
        });

        it('should equal -3 on )())())', async () => {
            let input = ')())())';
            let result = await solver.solveA(input);
            assert.strictEqual(result, -3);
        });
    });

    describe('Puzzle B', () => {
        it('should equal 1 on )', async () => {
            let input = ')';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 1);
        });

        it('should equal 5 on ()())', async () => {
            let input = '()())';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 5);
        });
    });
});
