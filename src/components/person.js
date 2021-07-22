import { React } from 'react';

const Person = ({ name, age, color }) =>
	<div key={ name } style={ { backgroundColor: color } }>
		{ name }
		{ age }
	</div>;

export default Person;
