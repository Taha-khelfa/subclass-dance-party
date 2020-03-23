var RobocopDancer = function(top,left,timeBetweenSteps,jump) {
  this.jump= jump || 40;
  makeDancer.call(this,top,left,timeBetweenSteps) ;
  this.$node = $('<img class = "RobocopDancer" src ="chat.png"/>');
  //this.step();
  this.setPosition(top,left)
};

RobocopDancer.prototype = Object.create(makeDancer.prototype);
RobocopDancer.prototype.constructor = RobocopDancer;
RobocopDancer.prototype.oldStep = function() {
  makeDancer.prototype.step.call(this);
};
RobocopDancer.prototype.step = function() {
  this.oldStep();

  this.$node.toggle();
}
