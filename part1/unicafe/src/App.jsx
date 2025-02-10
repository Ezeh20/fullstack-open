/* eslint-disable react/prop-types */
import { useState } from "react";
const initialState = {
	good: 0,
	neutral: 0,
	bad: 0,
};

const StatisticLine = ({ text, value }) => {
	return (
		<div>
			<p>{text} {value}</p>
		</div>
	);
};

const ActionButtons = ({ handleClick }) => {
	return (
		<div>
			<button onClick={() => handleClick("good")}>good</button>
			<button onClick={() => handleClick("neutral")}>neutral</button>
			<button onClick={() => handleClick("bad")}>bad</button>
		</div>
	);
};

const Statistics = ({ review }) => {
	const all = Object.values(review).reduce((acc, curr) => acc + curr, 0);
	const average = all / Object.values(review).length;
	const positive = (review.good / all) * 100;

	if (all === 0) {
		return <p>No feedback given</p>;
	}

	return (
		<div>
			<h1>statistics</h1>
			<StatisticLine text="good" value={review.good} />
			<StatisticLine text="neutral" value={review.neutral} />
			<StatisticLine text="bad" value={review.bad} />
			<StatisticLine text="all" value={all} />
			<StatisticLine text="average" value={average.toFixed(1)} />
			<StatisticLine text="positive" value={positive.toFixed(1) + "%"} />
		</div>
	);
};

const App = () => {
	const [review, setReview] = useState(initialState);

	const handleClick = (type) => {
		setReview((prev) => ({ ...prev, [type]: prev[type] + 1 }));
	};

	return (
		<div>
			<h1>give feedback</h1>
			<ActionButtons handleClick={handleClick} />
			<Statistics review={review} />
		</div>
	);
};

export default App;
