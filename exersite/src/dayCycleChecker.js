const lastTime = Number(localStorage.getItem("time")) ?? Date.now();
const msPerDay = 86400000;
const resetTime = 0; //midnight UTC

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