const Hero = function(name, favFood) {
  this.name = name; // string
  this.health = 100;
  this.favFood = favFood; // string
  this.tasks = []; // array of task objects
};

Hero.prototype.talk = function () {
  return `I am ${this.name}! Fear me!!`;
};

Hero.prototype.acceptTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.carryOutTask = function (task) {
  var found = this.tasks.find(function(eachTask) {
    if (eachTask == task) {
      eachTask.completed = true;
      return true;
    };
    return false;
  });

  if (found) { return "Done!" };
  return "Task not found...";
};

Hero.prototype.listCompletedTasks = function () {
  var found = this.tasks.find(function(eachTask) {
    if (eachTask.completed == true) {
      console.log(eachTask.fullString());
    };
  });
};

Hero.prototype.listUncompletedTasks = function () {
  var found = this.tasks.find(function(eachTask) {
    if (eachTask.completed == false) {
      console.log(eachTask.fullString());
    };
  });
};


Hero.prototype.eat = function (food) {
  if (food.name === this.favFood) {
    this.health += food.replenishValue * 1.5;
  } else {
    this.health += food.replenishValue;
  };
};

Hero.prototype.comapareDifficulty = function (a, b) {
  return b.difficulty - a.difficulty;
};

Hero.prototype.comapareUrgency = function (a, b) {
  return b.urgency - a.urgency;
};

Hero.prototype.comapareReward = function (a, b) {
  return b.reward - a.reward;
};

Hero.prototype.sortTasksByDifficulty = function () {
  this.tasks.sort(this.comapareDifficulty);
};

Hero.prototype.sortTasksByUrgency = function () {
  this.tasks.sort(this.comapareUrgency);
};

Hero.prototype.sortTasksByReward = function () {
  this.tasks.sort(this.comapareReward);
};

Hero.prototype.listTasks = function () {
  this.tasks.forEach(function (task) {
    console.log(task.fullString());
  });
}

// A hero should be able to view tasks that are marked as completed or incomplete.

module.exports = Hero;
