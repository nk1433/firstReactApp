import config from '../core/config';
import { range } from '@laufire/utils/collection';
import Button from './button';

const Buttons = () =>
	range(1, config.buttonInitialCount).map(Button);

export default Buttons;
