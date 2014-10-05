console.log("This is a nodeJS Application...");
console.log("Initializing the ports..."); 
var Gpio = require('onoff').Gpio,
   sleep = require('sleep'),
   _baseTime = 100000, //micro seconds
   second = _baseTime * 10,
   sensorData = true,
   MAX_TIME = 40;
var lanes = [
	{time: MAX_TIME, led: {red: 17, green: 18}, freetime: 0, ftItr: 0, state: 0 /* Red default and 1 is for GREEN */},
	{time: MAX_TIME, led: {red: 17, green: 18}, freetime: 0, ftItr: 0, state: 0 /* Red default and 1 is for GREEN */},
	{time: MAX_TIME, led: {red: 17, green: 18}, freetime: 0, ftItr: 0, state: 0 /* Red default and 1 is for GREEN */},
	{time: MAX_TIME, led: {red: 17, green: 18}, freetime: 0, ftItr: 0, state: 0 /* Red default and 1 is for GREEN */}
	];
console.log("Initialized the ports sucessfully..."); 
var signals = {
   on: function(led) {
      //led.writeSync(1);
	  
   },
   off: function(led) {
      //led.writeSync(0);
   }
};

console.log("Executing the ports..");    
lanes[0].state = 1;
var count = 0, lanenum = 0;
while (true) {

	for (var i=0; i<lanes.length; i++) {
		(lanes[i].state === 0) {
			signals.on(lanes[i].led.red);
			signals.off(lanes[i].led.green);
		} else {
			console.log('green at lane no: ' + (i+1));
			signals.off(lanes[i].led.red);
			signals.on(lanes[i].led.green);	
			lanes[i].ftItr++;	
			lanenum = i;
		}
	}
		
	greenTimerExec(greenLane, lanenum);
	lanes[count].state = 0;
	count++;
	if (count >= lanes.length) { count = 0;}
	lanes[count].state = 1;
}

 function greenTimerExec(num) {
	var lane = lanes[num];
	var k = lane.time;
	var sensorCount = 0;
	while(k>0) {
		console.log("green signal counter time remaining: " + k);
		if (!sensorData) { 
			sensorCount++;			
		} 
		k--;
		sleep.usleep(second);
	}
	lane.freeTime += sensorCount;
	if (lane.ftItr >= 4) {
		var avgTime = (Math.floor(lane.freeTime/(lane.ftItr + 1)));
		console.log("Average time Set for Lane: " + (num+1) + " Is : " + avgTime + " Seconds.");		
		avgTime += 5;
		if (avgTime>= MAX_TIME) {avgTime = MAX_TIME;}
		lane.time = avgTime;
	}
	lanes[num] = lane;
}
  
 
console.log("Completed the task."); 