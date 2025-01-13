import { db } from '@/app/config/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import toast from 'react-hot-toast';

export const createNewProgram = createAsyncThunk(
	'programs/createNewProgram',
	async (payload, thunkAPI) => {
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

export const getAllrogram = createAsyncThunk(
	'programs/getAllrogram',
	async (_, thunkAPI) => {
		try {
			const programsRef = collection(db, 'programs');
			const programsSnapshot = await getDocs(programsRef);

			if (!programsSnapshot.empty) {
				const programsData = await Promise.all(
					programsSnapshot.docs.map(async docSnapshot => {
						const programData = docSnapshot.data();
						const creatorId = programData.createdBy;

						// Fetch creator's details
						let creatorDetails = null;
						if (creatorId) {
							const creatorRef = doc(db, 'users', creatorId);
							const creatorDoc = await getDoc(creatorRef);

							if (creatorDoc.exists()) {
								creatorDetails = creatorDoc.data();
							}
						}

						return {
							id: docSnapshot.id,
							...programData,
							creator: creatorDetails,
						};
					})
				);

				return programsData;
			} else {
				return []; // Return an empty array if no programs are found
			}
		} catch (error) {
			console.error('Failed to fetch programs:', error.message);
			toast.error(error.message || 'Failed to fetch programs');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
