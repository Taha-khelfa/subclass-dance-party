var SuperHeroDancer = function(top,left,timeBetweenSteps,fly){
  this.fly = fly || 80 ;
  makeDancer.call(this,top,left,timeBetweenSteps) ;
  this.$node = $('<img class="superDancer" src ="img.png"/>');
  //this.step();
  this.setPosition(top,left);

};

SuperHeroDancer.prototype = Object.create(makeDancer.prototype) ;
SuperHeroDancer.prototype.constructor = SuperHeroDancer ;
SuperHeroDancer.prototype.oldStep = function(){
  makeDancer.prototype.step.call(this) ;
} ;
SuperHeroDancer.prototype.step = function() {
  this.oldStep();

  this.$node.toggle();
}

