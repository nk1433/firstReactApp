import { React } from 'react';
import context from '../core/context';

const increment = 2;
const DoubleButton = () =>
	<button
		onClick={ () => context.actions.increaseCountTwo(increment) }
	>
		+2
	</button>;

export default DoubleButton;
