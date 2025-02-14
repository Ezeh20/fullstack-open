/* eslint-disable react/prop-types */

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part) => (
				<Part key={part.id} part={part.name} exercises={part.exercises} />
			))}
		</>
	);
};

const Total = ({ parts }) => {
	return <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>;
};

export const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};
