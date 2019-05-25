//ship.js

const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");


const defaults = {
	COLOR: "#1F50D2",
	RADIUS: 15
}

let Ship = function (options){
	options.color = defaults.COLOR;
	options.radius = defaults.RADIUS;
	options.vel = options.vel ||[0,0];
	MovingObject.call(this, options);
	

}


Util.inherits(Ship, MovingObject);


Ship.prototype.fireBullet = function fireBullet(){
	const norm = Util.norm(this.vel);

	if (norm === 0){
		return;
	}

	const relVel = Util.scale(
		Util.dir(this.vel),
		Bullet.SPEED,
		);

	const bulletVel = [relVel[0] + this.vel[0], relVel[1] + this.vel[1]];

	const bullet = new Bullet(
		{
			game:this.game,
			pos: this.pos,
			vel : bulletVel,
			color : this.color,

		});
	this.game.add(bullet);

};

Ship.prototype.relocate = function(){
	this.pos = this.game.randomPosition();
	this.vel = [0,0];

}

Ship.prototype.power = function power(impulse){
	this.vel[0] += impulse[0];
	this.vel[1] += impulse[1];

}


module.exports = Ship;
