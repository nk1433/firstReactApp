import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	countOne: config.countOneStart,
	countTwo: config.countTwoStart,
	countMultiple: config.countMultipleStart,
	buttonValue: config.buttonInitialValue,
	refreshID: rndString(refreshIDLength),
};

export default seed;
