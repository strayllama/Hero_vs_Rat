const Rat = function() {
};

Rat.prototype.touchFood = function(food) {
  food.ratTouches();
  //console.log("Rat touched:", food.name);
};

module.exports = Rat;
