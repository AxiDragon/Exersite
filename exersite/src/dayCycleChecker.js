const lastTime = Number(localStorage.getItem("time")) || Date.now();
const msPerDay = 86400000;
const resetTime = 0; //midnight

checkTime();

function checkTime() {
	const currentTime = Date.now();
	const lastDay = Math.floor((lastTime - resetTime) / msPerDay);
	const currentDay = Math.floor((currentTime - resetTime) / msPerDay);
	console.log(lastDay);
	console.log(currentDay);
	if (currentDay - lastDay >= 1) {
		alert("It's a new day!");
		localStorage.setItem("time", Date.now());
		window.dispatchEvent(new CustomEvent("newDay"));
		return true;
	}
	return false;
}

//how to check if midnight has passed
//midnight happens every 86400000 milliseconds, lets call this x
//each day, Date().now() / x will be one greater than the previous day
//we can just check if the difference between Date().now() / x and lastTime / x is greater than 1
//if we want to check for a specific time, we can just subtract that time from the times
//and then we can treat it like midnight still