import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import People from './components/people';
import config from './core/config';
import context from './core/context';
import Buttons from './components/buttons';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ People() }
			count: { config.people.length }
			<p>{ context.state.buttonValue }</p>
			{ Buttons() }
		</div>
	);
};

export default App;
