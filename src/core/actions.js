const increaseCountOne = ({ state, data }) => ({
	countOne: state.countOne + data,
});
const increaseCountTwo = ({ state, data }) => ({
	countTwo: state.countTwo + data,
});
const multiply = ({ state, data }) => ({
	countMultiple: state.countMultiple * data,
});
const changeValue = ({ data }) => ({
	buttonValue: data,
});

const actions = {
	increaseCountOne,
	increaseCountTwo,
	multiply,
	changeValue,
};

export default actions;
