import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { getSingleUser, loginUser, logout, registerUser } from './userThunk';

const initialState = {
	user: getCookie('user') ? JSON.parse(getCookie('user')) : null,
	uid: getCookie('uid') || null,
	isLoading: false,
	loading: false,
	singleUser: null,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Additional reducers if needed
		retoreUserDetails(state, action) {
			state.user = action.payload;
			state.uid = action.payload.id;
			setCookie('uid', action.payload.id);
			setCookie('user', action.payload);
		},
	},
	extraReducers: builder => {
		// Handle loginUser thunk
		builder
			.addCase(loginUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.uid = action.payload.id;
				setCookie('uid', action.payload.id);
				setCookie('user', action.payload);
				state.isLoading = false;
			})
			.addCase(loginUser.rejected, state => {
				state.isLoading = false;
			})

			// Handle singleUser thunk
			.addCase(getSingleUser.pending, state => {
				state.isLoading = true;
				state.error = null; // Clear previous errors
			})
			.addCase(getSingleUser.fulfilled, (state, action) => {
				state.singleUser = action.payload; // Set fetched user data
				state.isLoading = false;
			})
			.addCase(getSingleUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload; // Set error message
			})

			// Handle registerUser thunk
			.addCase(registerUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, state => {
				state.isLoading = false;
			})
			.addCase(registerUser.rejected, state => {
				state.isLoading = false;
			})
			// Handle logout thunk
			.addCase(logout.pending, state => {
				state.isLoading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = null;
				state.uid = null;

				deleteCookie('uid');
				deleteCookie('user');
			})
			.addCase(logout.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const { retoreUserDetails } = userSlice.actions;

export default userSlice.reducer;
