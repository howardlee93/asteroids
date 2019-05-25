//MovingObject.js

const Util = require('./utils.js');

function MovingObject(options){
	this.pos = options.pos;
	this.vel = options.vel;
	this.radius = options.radius;
	this.color = options.color; 
	this.game = options.game;

}

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.draw = function (ctx){
	ctx.beginPath();
	ctx.arc(this.pos[0], 
		this.pos[1],
		this.radius, 
		0, 
		2 * Math.PI,
		true,);
	ctx.fillStyle = this.color;

	ctx.fill();

}

const TIME_DELTA = 1000/60;

MovingObject.prototype.move = function move(delta){
	const vel = delta / TIME_DELTA,
      moveX = this.vel[0] * vel,
      moveY = this.vel[1] * vel;

    this.pos = [this.pos[0] + moveX, this.pos[1] + moveY];


  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.remove();
    }
  }
}


MovingObject.prototype.collideWith = function collidedWith(otherObject){

};

MovingObject.prototype.remove = function remove(){
	this.game.remove(this);

}


MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject){
	const centerDist = Util.dist(this.pos, otherObject.pos);
	return centerDist < (this.radius + otherObject.radius);

	


}



module.exports = MovingObject;
