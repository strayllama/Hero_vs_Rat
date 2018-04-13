const Hero = function(name, favFood) {
  this.name = name; // string
  this.health = 100;
  this.favFood = favFood; // string
  this.tasks = []; // array of task objects
};

Hero.prototype.talk = function () {
  return `I am ${this.name}! Fear me!!`;
};

module.exports = Hero;
