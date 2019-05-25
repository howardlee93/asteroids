// //asteroid.js

const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");
const Ship = require("./ship.js");

const defaults = {
	COLOR : "#900C3F",
	RADIUS : 25,
	SPEED : 1
}

const Asteroid = function (options={}){
	options.color = defaults.COLOR;
	options.radius = defaults.RADIUS;
	options.pos =  options.pos ||options.game.randomPosition();
	options.vel = Utils.randomVec(defaults.SPEED) || options.vel; 


	MovingObject.call(this, options);
	

	}

Utils.inherits(Asteroid, MovingObject);


Asteroid.prototype.collideWith = function (other) {
  if (other instanceof Ship) {
    other.relocate();
    return true;
  } else if (other instanceof Bullet) {
    this.remove();
    other.remove();
    return true;
  }
};



module.exports = Asteroid;