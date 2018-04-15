const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js')
const Task = require('../models/task.js')

describe('Hero', function () {

  let hero;
  let task1;
  let task2;
  let task3;
  let task4;
  let food1;
  let food2;

  beforeEach(function() {
    hero = new Hero('Conan', 'Dried Goat');
    food1 = new Food('Cheese Toasty', 10);
    food2 = new Food('Dried Goat', 10);
    task1 = new Task(4,3,15, "Put the recycling out.");
    task2 = new Task(2,5,10, "Go to shops for milk.");
    task3 = new Task(9,4,100, "Fix the broken roof tile.");
    task4 = new Task(4,5,200, "Send thankyou card to mother inlaw.");
    hero.acceptTask(task1);
    hero.acceptTask(task2);
    hero.acceptTask(task3);
    hero.acceptTask(task4);
  //  hero.carryOutTask(task2);
  });

  it('should have name', function() {
    assert.strictEqual(hero.name,'Conan');
  });

  it('should have health', function() {
    assert.strictEqual(hero.health,100);
  });

  it('should have favFood', function() {
    assert.strictEqual(hero.favFood,'Dried Goat')
  });

  it('should have inventory of tasks', function() {
    assert.strictEqual(hero.tasks.length, 4);
  });

  it('should have ability to talk', function() {
    assert.strictEqual(hero.talk(), 'I am Conan! Fear me!!');
  });

  it('should have ability to eat and health goes up', function() {
    hero.eat(food1);
    assert.strictEqual(hero.health, 110);
  });

  it('should have ability to eat Fav food and health goes up by 1.5 more than other food', function() {
    hero.eat(food2);
    assert.strictEqual(hero.health, 115);
  });

  it('should be able to list tasks', function() {
    console.log("\n");
    console.log("Unsorted List:");
    hero.listTasks();  // DOES list!
  });

  it('should sort tasks by difficulty', function() {
    hero.sortTasksByDifficulty();
    console.log("\n");
    console.log("Sorted by Difficulty:");
    hero.listTasks();
  });

    it('should sort tasks by urgency', function() {
      hero.sortTasksByUrgency();
      console.log("\n");
      console.log("Sorted by Urgency:");
      hero.listTasks();
    });

    it('should sort tasks by reward', function() {
      hero.sortTasksByReward();
      console.log("\n");
      console.log("Sorted by Reward:");
      hero.listTasks();
    });

    it('should be able to complete tasks', function () {
      assert.strictEqual(hero.carryOutTask(task2), "Done!")
      assert.strictEqual(task2.completed, true);
      console.log("\n");
      console.log("Re-list showing DONE status to task 2:");
      hero.listTasks();
    });

    it('should be able to list completed and uncompleted tasks', function () {
      hero.carryOutTask(task1);
      hero.carryOutTask(task2);
      console.log("\n");
      console.log("List ONLY compleated tasks:");
      hero.listCompletedTasks();
      console.log("\n");
      console.log("List ONLY UNcompleated tasks:");
      hero.listUncompletedTasks();
    });

  }); // end describe
