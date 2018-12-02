/* global describe, it */
const Solver = require('../solvers/day2.js');
const assert = require('assert');
let solver = new Solver();

describe('Day 2', () => {
    describe('Puzzle A', () => {
        it('Should checksum to 12 on only input', async () => {
            let input = 'abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab\n';
            let result = await solver.solveA(input);
            assert.strictEqual(result, 12);
        });
    });

    describe('Puzzle B', () => {
        it('should equal fgij on only input', async () => {
            let input = 'abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz\n';
            let result = await solver.solveB(input);
            assert.strictEqual(result, 'fgij');
        });
    });
});
