import { createSlice } from '@reduxjs/toolkit';
import {
	createNewProgram,
	getAllrogram,
	getAllProgramById,
	getProgramPurchaseByOthers,
	getProgramPurchaseByUser,
} from './programThunk';
const initialState = {
	programs: [],
	programsById: [],
	programPurchaseByOthers: [],
	programPurchaseByUser: [],
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
			})
			.addCase(getAllrogram.fulfilled, (state, action) => {
				state.programs = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllrogram.rejected, state => {
				state.isLoading = false;
			})
			//GetAllProgramsById
			.addCase(getAllProgramById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getAllProgramById.fulfilled, (state, action) => {
				state.programsById = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllProgramById.rejected, state => {
				state.isLoading = false;
			})
			//GetProgramPurchaseByOthers
			.addCase(getProgramPurchaseByOthers.pending, state => {
				state.isLoading = true;
			})
			.addCase(getProgramPurchaseByOthers.fulfilled, (state, action) => {
				state.programPurchaseByOthers = action.payload;
				state.isLoading = false;
			})
			.addCase(getProgramPurchaseByOthers.rejected, state => {
				state.isLoading = false;
			})
			//GetProgramPurchaseByUser
			.addCase(getProgramPurchaseByUser.pending, state => {
				state.isLoading = true;
			})
			.addCase(getProgramPurchaseByUser.fulfilled, (state, action) => {
				state.programPurchaseByUser = action.payload;
				state.isLoading = false;
			})
			.addCase(getProgramPurchaseByUser.rejected, state => {
				state.isLoading = false;
			});
	},
});

export default programSlice.reducer;
