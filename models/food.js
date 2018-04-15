const Food = function (name, replenishValue) {
  this.name = name;
  this.replenishValue = replenishValue;
  this.poisonousWhenMinus1 = 1;
};

Food.prototype.ratTouches = function () {
  this.poisonousWhenMinus1 = -1;
};

module.exports = Food;
