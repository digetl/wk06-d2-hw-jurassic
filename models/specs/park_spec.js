const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dinosaurs;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100, dinosaurs);
    dino1 = new Dinosaur('spineasaurus', 'meat', 25);
    dino2 = new Dinosaur('spineasaurus', 'meat', 50);
    dino3 = new Dinosaur('Brachiosauraus', 'plant', 100);
    dinosaurs = [dino1, dino2];
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs; 
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

  it("should be able to add a dinosaur to its collection", function(){
    park.addDinosaur(dino3);
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 3);
  });


  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dino3);
    park.removeDinosaur(dino3);
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, 50);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
