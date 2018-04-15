const assert = require('assert');
const Rat = require('../models/rat.js')
const Food = require('../models/food.js')

describe('Rat', function () {

  let rat1;
  let food1;

  beforeEach(function() {
    rat1 = new Rat();
    food1 = new Food('Cheese Toasty', 10);
  });

  it('should be able to touch food and change it to poisoned', function() {
    assert.strictEqual(food1.poisonousWhenMinus1, 1);
    rat1.touchFood(food1);
    assert.strictEqual(food1.poisonousWhenMinus1, -1);
  });
  
}); // end of Rat describe
