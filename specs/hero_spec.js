const assert = require('assert');
const Hero = require('../models/hero.js');

describe('Hero', function () {

  let hero;

  beforeEach(function() {
    hero = new Hero('Conan', 'Dried Goat');

  });

  it('should have name', function() {
    assert.strictEqual(hero.name,'Conan')
  });

  it('should have health', function() {
    assert.strictEqual(hero.health,100)
  });

  it('should have favFood', function() {
    assert.strictEqual(hero.favFood,'Dried Goat')
  });

  it('should have inventory of tasks', function() {
    assert.strictEqual(hero.tasks.length, 0)
  });

  it('should have ability to talk', function() {
    assert.strictEqual(hero.talk(), 'I am Conan! Fear me!!')

  });
}); // end describe
