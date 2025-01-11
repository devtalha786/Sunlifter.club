import { createSlice } from '@reduxjs/toolkit';
import { createNewProgram } from './programThunk';
const initialState = {
	programs: null,
	isLoading: false,
	error: null,
};

export const programSlice = createSlice({
	name: 'program',
	initialState,
	reducers: {
		// Additional reducers if needed
	},
	extraReducers: builder => {
		// Handle loginUser thunk
		builder

			.addCase(createNewProgram.pending, state => {
				state.isLoading = true;
				state.error = null; // Clear previous errors
			})
			.addCase(createNewProgram.fulfilled, state => {
				state.isLoading = false;
			})
			.addCase(createNewProgram.rejected, state => {
				state.isLoading = false;
			});
	},
});

export default programSlice.reducer;
