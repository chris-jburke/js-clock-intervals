let secondDegrees = 360 / 60;
let minuteDegrees = (360 / 60) / 60;
//let hourDegrees = ((360 / 60) / 60) / 60;
let now = new Date();
console.log(now);
let currHour = now.getHours();
let currHourDegrees = (currHour % 12) * (360/12);
let currMin = now.getMinutes();
let currMinDegrees = currMin * (360 / 60);
//console.log(currMin);
//console.log(currMinDegrees);
let currSecond = now.getSeconds();
let currSecondDegrees = currSecond * ((360 / 60) * 60);
console.log(currSecondDegrees);
let secondHand = document.getElementById("second");
let minuteHand = document.getElementById("minute");
let hourHand = document.getElementById("hour");

//hourHand.style.transform = "rotate(" + currHourDegrees + "deg)";
let hourDegrees = currHourDegrees;
minuteDegrees = currMinDegrees;
secondDegrees = currSecondDegrees;
timer = setInterval(function() {
	console.log("sweet sweet interval");
	secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
	secondDegrees = secondDegrees + 6;
	minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
	minuteDegrees += 0.1
	hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
	console.log(hourDegrees);
	hourDegrees += (0.1/ 12);


}, 10);

