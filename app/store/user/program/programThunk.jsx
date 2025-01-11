import { db } from '@/app/config/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

export const createNewProgram = createAsyncThunk(
	'programs/createNewProgram',
	async ({ payload }, thunkAPI) => {
		try {
			const programsCollectionRef = collection(db, 'programs');
			const programRef = doc(programsCollectionRef);
			const programData = {
				...payload,
				id: programRef.id,
				createdAt: serverTimestamp(),
			};
			await setDoc(programRef, programData);
			toast.success('Program created successfully');
		} catch (error) {
			console.error('Error during program creation:', error.message);
			toast.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
