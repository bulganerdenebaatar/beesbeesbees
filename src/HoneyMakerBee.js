var HoneyMakerBee = function() {
  Bee.call(this); // inherit from Bee
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};
HoneyMakerBee.prototype = Object.create(Bee.prototype); // inherit from Grub
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1;
};
HoneyMakerBee.prototype.constructor = HoneyMakerBee;