import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const SimpleButton = () =>
	<button
		onClick={ () => context.actions.increaseCountOne(config.increment) }
	>
		+1
	</button>;

export default SimpleButton;
