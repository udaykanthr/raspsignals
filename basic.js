console.log("This is a nodeJS Application...");
console.log("Initialized the ports sucessfully..."); 
var Gpio = require('onoff').Gpio,
   led = new Gpio(17, 'out'),
   sleep = require('sleep'),
   _baseTime = 128000, //micro seconds
   sleepTime = _baseTime, 
   btwCodes = _baseTime * 2,
   btwLetters = _baseTime * 4,
   btwWords = _baseTime * 8;
 
console.log("Initialized the ports sucessfully..."); 