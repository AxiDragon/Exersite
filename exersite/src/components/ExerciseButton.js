import React, { useState } from 'react';

function ExerciseButton({ name, initialCount }) {
	const [count, setCount] = useState(initialCount);

	const handleClick = () => {
		setCount(count => Number(count) + 1);
	};

	return (
		<button class="ExerciseButton" onClick={handleClick}>
			<div class="workout-name">{name}</div>
			<div class="counter">{count}</div>
		</button>
	);
}

export default ExerciseButton;