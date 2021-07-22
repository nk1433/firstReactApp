import { React } from 'react';
import context from '../core/context';

const multiple = 2;
const MultiplyButton = () =>
	<button
		onClick={ () => context.actions.multiply(multiple) }
	>
		*2
	</button>;

export default MultiplyButton;
