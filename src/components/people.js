import { React } from 'react';
import Person from './person';
import config from '../core/config';

const People = () =>
	<div>
		{ config.people.map(Person) }
	</div>;

export default People;
