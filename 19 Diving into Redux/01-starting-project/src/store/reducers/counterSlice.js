import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

/* const counterReducer = (state = initialState, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'increase') {
		console.log(action);
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'toggle') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store; */
