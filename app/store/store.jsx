import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userSlice } from './user/userSlice';

const reducers = combineReducers({
	user: userSlice.reducer, // Use the reducer property of the userSlice
});

const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
