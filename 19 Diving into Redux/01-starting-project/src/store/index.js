import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import counterReducer from './reducers/counterSlice';

const reducers = combineReducers({
	counter: counterReducer,
	auth: authSlice,
});

const store = configureStore({
	reducer: reducers,
});

export default store;
