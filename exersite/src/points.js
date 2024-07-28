const dailyPoints = 3;
const lastTime = new Date().getTime();

function checkTime() {
	const currentTime = new Date().getTime();
	if (currentTime - lastTime >= 86400000) {
		lastTime = currentTime;
		return true;
	}
	return false;
}