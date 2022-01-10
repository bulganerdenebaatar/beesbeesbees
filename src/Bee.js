var Bee = function() {
  Grub.call(this); // calling parent constructor
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype); //inherit from superclass Grub (new Grub)
Bee.prototype.constructor = Bee; //list Bee as the actual constructor
