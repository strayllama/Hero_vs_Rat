const Task = function(difficulty, urgency, reward, description) {
  this.difficulty = difficulty; // out of 10
  this.urgency = urgency; // out of 5
  this.reward = reward; // gold amount
  this.description = description;
  this.completed = false;
};

Task.prototype.complete = function () {
  this.completed = true;
};

Task.prototype.fullString = function () {
  let done = "";
  if (this.completed) { done = "DONE";} else {  done = "    ";}

  return `Task ${done} Difficulty: ${this.difficulty}, Urgency: ${this.urgency}, Reward:${this.reward}, \"${this.description}\"`
};

module.exports = Task;
