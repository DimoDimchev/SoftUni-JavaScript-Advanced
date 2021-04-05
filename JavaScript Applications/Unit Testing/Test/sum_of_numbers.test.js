const expect = require('chai').expect;
const sum = require('../sum_of_numbers.js').sum();

describe('Sum of Numbers', function () {
    it("should return 3 for [1,2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });

    it("should return 0 for empty array", function () {
        expect(sum([])).to.be.equal(0);
    });

    it("should return NaN for invalid data", function () {
        expect(sum("invalid data")).to.be.NaN;
    });
});
