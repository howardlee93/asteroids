// //GameView
 

const GameView = function (game, ctx){
	this.game = game;
	this.ctx = ctx;
	this.ship = this.game.addShip();

}
GameView.MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
};


GameView.prototype.start = function(ctx){
	this.bindKeyHandlers();

	this.lastTime = 0;
	requestAnimationFrame(this.animate.bind(this));


}

GameView.prototype.bindKeyHandlers = function bindKeyHandlers(){
	const ship = this.ship;

  	Object.keys(GameView.MOVES).forEach((k) => {
    	let move = GameView.MOVES[k];
    	key(k, function () { ship.power(move); });
  	});

 	key("space", function () { ship.fireBullet() });
}

GameView.prototype.animate = function animate(time){
	const delta = time - this.lastTime;
	this.game.step(delta);
	this.game.draw(this.ctx);
	this.lastTime = time;
	requestAnimationFrame(this.animate.bind(this));

}


//
module.exports = GameView;
