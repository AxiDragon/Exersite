const lastTime = Number(localStorage.getItem("time")) ?? Date.now();
const msPerDay = 86400000;
const resetTime = 0; //midnight UTC

// window.dispatchEvent(new CustomEvent("newDay"));

checkTime();

function checkTime() {
	const currentTime = Date.now();
	const lastDay = Math.floor((lastTime - resetTime) / msPerDay);
	const currentDay = Math.floor((currentTime - resetTime) / msPerDay);
	if (currentDay - lastDay >= 1) {
		localStorage.setItem("time", Date.now());
		window.dispatchEvent(new CustomEvent("newDay"));
		return true;
	}
	return false;
}