import { React } from 'react';
import context from '../core/context';

const Button = (data) =>
	<button key={ data } onClick={ () => context.actions.changeValue(data) }>
		{ data }
	</button>;

export default Button;
