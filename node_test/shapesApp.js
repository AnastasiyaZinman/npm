var circleUtils = require('./circleUtils');
var calcRectArea = require('./rectangleUtils').calcRectArea;
console.log(calcRectArea(4, 5));
//-------------------------------
console.log(circleUtils.title);
console.log(circleUtils.calcCircleArea(10));
console.log("Just to verify: " + 10 * 10 * 3.14159);