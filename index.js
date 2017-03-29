var sqr = function (a) {
	return Math.pow(a, 2);
};
var vector = function (x, y) {
	return {
		x: x,
		y: y
	};
};

module.exports = {
	calculate: (beacons) => {
		var j, k, x, y;
		if (beacons.length < 3) {
			console.error("Error! Please add at least three beacons!");
			return vector(0, 0);
		}
		k = (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].distance) + sqr(beacons[1].distance)) / (2 * (beacons[0].y - beacons[1].y)) - (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[2].x) - sqr(beacons[2].y) - sqr(beacons[0].distance) + sqr(beacons[2].distance)) / (2 * (beacons[0].y - beacons[2].y));
		j = (beacons[2].x - beacons[0].x) / (beacons[0].y - beacons[2].y) - (beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y);
		x = k / j;
		y = ((beacons[1].x - beacons[0].x) / (beacons[0].y - beacons[1].y)) * x + (sqr(beacons[0].x) + sqr(beacons[0].y) - sqr(beacons[1].x) - sqr(beacons[1].y) - sqr(beacons[0].distance) + sqr(beacons[1].distance)) / (2 * (beacons[0].y - beacons[1].y));
		return vector(x, y);
	}
};
