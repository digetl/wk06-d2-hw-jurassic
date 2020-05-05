const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }

  Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length
}

  Park.prototype.addDinosaur = function(dino){
    this.dinosaurs.push(dino);
}

module.exports = Park;

