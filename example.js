var trilateration = require('./index.js');

var beacons = [
	{x: 2, y: 4, distance: 5.7},
	{x: 5.5, y: 13, distance: 6.8},
	{x: 11.5, y: 2, distance: 6.4}
];

var pos = trilateration.calculate(beacons);

console.log("X: " + pos.x + "; Y: " + pos.y); // X: 7; Y: 6.5
