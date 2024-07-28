import React, { useState } from 'react';

const dailyPoints = 3;
// localStorage.setItem("points", dailyPoints);
let points = Number(localStorage.getItem("points")) ?? 3;

dispatchPointsChange(); //initial dispatch

export const getPoints = () => points;
export const setPoints = newPoints => {
	points = newPoints;
	localStorage.setItem("points", points);
	dispatchPointsChange();
};

function ExerciseButton({ name, initialCount }) {
	const [count, setCount] = useState(initialCount);

	const handleClick = () => {
		if (points <= 0) {
			alert("You don't have enough points!");
			return;
		}

		setCount(count => Number(count) + 1);
		setPoints(points - 1);

		//also send a POST request to the server
	};

	return (
		<button className="ExerciseButton" onClick={handleClick}>
			<div className="workout-name">{name}</div>
			<div className="counter">{count}</div>
		</button>
	);
}

function dispatchPointsChange() {
	const event = new CustomEvent("pointsChange", {
		detail: points
	});

	window.dispatchEvent(event);
}

export default ExerciseButton;