const assert = require('assert');
const Food = require('../models/food.js')

describe('Food', function () {

  let food;

  beforeEach(function() {
    food = new Food('Cheese Toasty', 10);
  });

  it('should have name', function () {
    assert.strictEqual(food.name, 'Cheese Toasty');
  });

  it('should have replenish value', function () {
    assert.strictEqual(food.replenishValue, 10);
  });

}); // end describe
