console.log("This is a nodeJS Application...");
console.log("Initializing the ports sucessfully..."); 
var Gpio = require('onoff').Gpio,
   led = new Gpio(11, 'out'),
   sleep = require('sleep'),
   _baseTime = 128000, //micro seconds
   sleepTime = _baseTime,
   btwWords = _baseTime * 8;;
console.log("Initialized the ports sucessfully..."); 

console.log("Executing the ports..");    
for (var i=0; i<10; i++) {
	console.log("setting port17 to ON state");
	sleep.usleep(btwWords);
	console.log("setting port17 to OFF state");
}   
 
console.log("Completed the task."); 