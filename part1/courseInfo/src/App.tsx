const Part = (props: { part: string; exercises: number }) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Header = (props: { course: string }) => {
	return <h1>{props.course}</h1>;
};

const Content = (props: { parts: { name: string; exercises: number }[] }) => {
	return (
		<>
			<Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
			<Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
			<Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
		</>
	);
};

const Total = (props: { parts: { name: string; exercises: number }[] }) => {
	const exercise = props.parts;
	return (
		<p>
			Number of exercises{" "}
			{exercise[0].exercises + exercise[1].exercises + exercise[2].exercises}
		</p>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
