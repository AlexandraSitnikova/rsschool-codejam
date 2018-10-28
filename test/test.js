var assert = require('assert');

describe('sumOfOther', function() {
    it('should return the sum of the remaining elements of the array', function() {
      assert.equal(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
});