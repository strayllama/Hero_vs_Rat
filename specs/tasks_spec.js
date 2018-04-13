const assert = require('assert');
const Task = require('../models/task.js')

describe('Task', function () {

  let task1;

  beforeEach(function() {
    task1 = new Task(7,3,100);
  });

  it('should have difficulty', function() {
    assert.strictEqual(task1.difficulty, 7);
  });

  it('should have urgency', function() {
    assert.strictEqual(task1.urgency,3);

  });

  it('should have reward', function() {
    assert.strictEqual(task1.reward,100);

  });

  it('should be able to be compleated', function() {
    assert.strictEqual(task1.completed,false);
   task1.complete();
    assert.strictEqual(task1.completed,true);
  });

}); // end describe
