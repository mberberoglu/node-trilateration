# node-trilateration

> A simple solution to the trivial problem of trilateration.

## Problem

You've got three beacons, their distances to your device and you want to calculate the device's position.

## Theory

Suppose we have three circles, which centers are the positions of beacon. The radius equals to the distances of the beacons. Let the circles be A, B, and C.

Each circle's formula would look like this:

![Formula Circle](https://github.com/mberberoglu/node-trilateration/raw/master/img/circle.png)

Substracting two circles would give a linear equation, which crosses their two intersections:

![Linear Equation from Subtraction](https://github.com/mberberoglu/node-trilateration/raw/master/img/linearfunction.png)

Calculating the intersection of two of these linear equations give the x-value of the devices position in between the beacons.

![Calculate x-value via intersecting](https://github.com/mberberoglu/node-trilateration/raw/master/img/calculateX.png)

This value can then be inserted in one of the two linear equations to get the corresponding y-value.

## Installation

```
npm install trilateration
```

## Usage

```javascript
var trilateration = require('node-trilateration');

# Creating three beacons
var beacons = [
	{x: 2, y: 4, distance: 5.7},
	{x: 5.5, y: 13, distance: 6.8},
	{x: 11.5, y: 2, distance: 6.4}
];

# Start Calculation
var pos = trilateration.calculate(beacons);

console.log("X: " + pos.x + "; Y: " + pos.y); // X: 7; Y: 6.5
```

## API

### function calculate(Beacons)

Starts the calculation of the position and returns a vector for your device's position.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
