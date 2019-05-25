//index.js


const Game = require("./game.js");
const GameView = require("./gameview.js");




window.addEventListener('DOMContentLoaded', (event) => {
	const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;

	var game = new Game();	
	new GameView(game,ctx).start();

});



console.log("Webpack is working!");
