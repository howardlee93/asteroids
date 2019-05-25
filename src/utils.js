//utils.js


const Util = {

	inherits(childClass, parentClass){
		function Surrogate () {}
		Surrogate.prototype = parentClass.prototype;
		childClass.prototype = new Surrogate();
		childClass.prototype.constructor = this;

	},

	randomVec(length) {
	    const deg = 2 * Math.PI * Math.random();
	    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
 	scale(vec, m) {
    	return [vec[0] * m, vec[1] * m];
  },

//how do you get this ?
 	wrap(coord, max){
 		if (coord < 0){
 			return max - (coord % max);
 		}else if (coord > max ){
 			return (coord % max);
 		}else {
 			return coord;
 		}
 	},

 	dist (pos1, pos2) {
 		return Math.sqrt(
 			Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    	);
  },

  dir (vec) {
    var norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  
  norm (vec) {
    return Util.dist([0, 0], vec);
  },



}

module.exports = Util;
