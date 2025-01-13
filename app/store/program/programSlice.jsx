import { createSlice } from '@reduxjs/toolkit';
import { createNewProgram, getAllrogram } from './programThunk';
const initialState = {
	programs: [],
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
			})
			//GetAllPrograms
			.addCase(getAllrogram.pending, state => {
				state.isLoading = true;
				state.error = null; // Clear previous errors
			})
			.addCase(getAllrogram.fulfilled, (state, action) => {
				state.programs = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllrogram.rejected, state => {
				state.isLoading = false;
			});
	},
});

export default programSlice.reducer;
