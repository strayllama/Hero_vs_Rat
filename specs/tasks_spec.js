const assert = require('assert');
const Task = require('../models/task.js')

describe('Task', function () {

  let task1;

  beforeEach(function() {
    task1 = new Task(2,5,10, "Go to the shops for milk.");
  });

  it('should have difficulty', function() {
    assert.strictEqual(task1.difficulty, 2);
  });

  it('should have urgency', function() {
    assert.strictEqual(task1.urgency,5);

  });

  it('should have reward', function() {
    assert.strictEqual(task1.reward,10);

  });

  it('should be able to be completed', function() {
    assert.strictEqual(task1.completed,false);
   task1.complete();
    assert.strictEqual(task1.completed,true);
  });

  it('should have a string descriptor of whole object', function() {
    assert.strictEqual(task1.fullString(), `Task      Difficulty: 2, Urgency: 5, Reward:10, "Go to the shops for milk."`)
  });

}); // end describe
