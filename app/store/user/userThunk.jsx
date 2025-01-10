import { auth, db } from '@/app/config/firebase';
import { uploadToFirebase } from '@/app/utils/HelperFunctions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

// `loginUser` Thunk
export const loginUser = createAsyncThunk(
	'user/login',
	async ({ payload, onSuccess, onError }, thunkAPI) => {
		try {
			const response = await signInWithEmailAndPassword(
				auth,
				payload.email,
				payload.password
			);
			const userDoc = await getDoc(doc(db, 'users', response.user.uid));

			if (userDoc.exists()) {
				const userData = { id: userDoc.id, ...userDoc.data() };
				onSuccess(userData);
				return userData;
			} else {
				toast.error(
					'Your account data have been deleted from the database'
				);
				return thunkAPI.rejectWithValue('User data not found');
			}
		} catch (error) {
			console.error('Error: ', error.message);
			toast.error('Invalid login credentials, please try again.');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// `registerUser` Thunk
export const registerUser = createAsyncThunk(
	'user/registerUser',
	async ({ payload, onSuccess }, thunkAPI) => {
		try {
			const { email, password,confirmPassword, ...userDetails } = payload; // Destructure to exclude the password

			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			// Reference for Firestore
			const userRef = doc(db, 'users', userCredential.user.uid);

			// If profilePicture exists, upload it
			// let profilePictureURL = null;
			// if (userDetails.profilePicture) {
			// 	const result = await uploadToFirebase(
			// 		userDetails.profilePicture,
			// 		'profiles_Images'
			// 	);
			// 	profilePictureURL = result.downloadURL;
			// }
			await setDoc(userRef, {
				email,
				password,
				...userDetails,
				// profilePicture: profilePictureURL,
				createdAt: serverTimestamp(),
			});
			toast.success('Account created successfully');
			onSuccess();
			return userCredential.user.uid;
		} catch (error) {
			console.error('Error during registration:', error.message);
			toast.error(error.message || 'Account creation failed');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// `logout` Thunk
export const logout = createAsyncThunk(
	'user/logout',
	async ({ onSuccess }, thunkAPI) => {
		try {
			await signOut(auth);
			onSuccess();
		} catch (error) {
			console.error('Error: ', error.message);
			toast.error(error.message || 'Logout failed');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
// `getSingleUser` Thunk
export const getSingleUser = createAsyncThunk(
	'user/getSingleUser',
	async ({ uid }, thunkAPI) => {
		try {
			const userDocRef = doc(db, 'users', uid); // Use the provided `uid`
			const userDoc = await getDoc(userDocRef);

			if (userDoc.exists()) {
				const userData = userDoc.data();
				return userData;
			} else {
				return null;
			}
		} catch (error) {
			console.error('Error fetching user: ', error.message);
			// toast.error(error.message || 'Failed to fetch user');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
