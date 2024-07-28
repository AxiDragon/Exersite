import React, { useState } from 'react';

let points = 3;

dispatchPointsChange(); //initial dispatch

export const getPoints = () => points;
export const setPoints = newPoints => {
	points = newPoints;

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
		<button class="ExerciseButton" onClick={handleClick}>
			<div class="workout-name">{name}</div>
			<div class="counter">{count}</div>
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