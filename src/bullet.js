//bullet.js
const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");


function Bullet(options) {
  options.radius = Bullet.RADIUS;
  options.color = "green";
  
  

  MovingObject.call(this, options);
};

Util.inherits(Bullet, MovingObject);

Bullet.RADIUS = 2;
Bullet.SPEED = 10;

Bullet.prototype.isWrappable = false;

module.exports = Bullet;
