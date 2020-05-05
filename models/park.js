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

  Park.prototype.removeDinosaur = function(dinosaur) {
     
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);

  }


  Park.prototype.mostVisitors = function() {
    let mostVisited = 0;
    for (dinosaur in this.dinosaurs) {
        
       if (dinosaur.guestsAttractedPerDay > mostVisited) {
       mostVisited === guestsAttractedPerDay;
       }

    }
    
  }


module.exports = Park;

