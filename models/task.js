const Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty; // out of 10
  this.urgency = urgency; // out of 5
  this.reward = reward; // gold amount
  this.completed = false;
};

Task.prototype.complete = function () {
  this.completed = true;
};

module.exports = Task;
