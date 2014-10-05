console.log("This is a nodeJS Application...");
console.log("Initializing the ports sucessfully..."); 
var Gpio = require('onoff').Gpio,
   led = new Gpio(17, 'out'),
   sleep = require('sleep'),
   _baseTime = 128000, //micro seconds
   sleepTime = _baseTime,
   btwWords = _baseTime * 8;;
console.log("Initialized the ports sucessfully..."); 
var signals = {

   blink: function() {
      led.writeSync(1);
   },
   reset: function() {
      led.writeSync(0);
   }
}
console.log("Executing the ports..");    
for (var i=0; i<10; i++) {
	console.log("setting port17 to ON state");
	signals.bink();
	sleep.usleep(btwWords);
	signals.reset();
	console.log("setting port17 to OFF state");
}   
 
console.log("Completed the task."); 