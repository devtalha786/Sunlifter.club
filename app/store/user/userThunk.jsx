import { auth, db } from '@/app/config/firebase';
import { uploadToFirebase } from '@/app/utils/HelperFunctions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
	updateDoc,
	where,
} from 'firebase/firestore';
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
			const { email, password, confirmPassword, ...userDetails } =
				payload;
			const usersRef = collection(db, 'users');
			const usernameQuery = query(
				usersRef,
				where('name', '==', payload.name)
			);
			const usernameSnapshot = await getDocs(usernameQuery);

			if (!usernameSnapshot.empty) {
				const errorMessage =
					'Username already exists. Please choose a different one.';
				toast.error(errorMessage);
				return thunkAPI.rejectWithValue(errorMessage);
			}

			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const userRef = doc(db, 'users', userCredential.user.uid);
			let profilePictureURL = null;
			if (userDetails.profilePicture) {
				const result = await uploadToFirebase(
					userDetails.profilePicture,
					'profiles_Images'
				);
				profilePictureURL = result.downloadURL;
			}
			await setDoc(userRef, {
				email,
				password,
				...userDetails,
				profilePicture: profilePictureURL,
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

// `profileUpdate` Thunk
export const profileUpdate = createAsyncThunk(
	'user/profileUpdate',
	async ({ formData, uid }, thunkAPI) => {
		try {
			const usersRef = collection(db, 'users');
			const usernameQuery = query(
				usersRef,
				where('name', '==', formData.name)
			);
			const usernameSnapshot = await getDocs(usernameQuery);

			if (!usernameSnapshot.empty) {
				const errorMessage =
					'Username already exists. Please choose a different one.';
				toast.error(errorMessage);
				return thunkAPI.rejectWithValue(errorMessage);
			}
			const userRef = doc(db, 'users', uid);
			const userDoc = await getDoc(userRef);
			if (!userDoc.exists()) {
				throw new Error('User document does not exist');
			}
			const currentData = userDoc.data();
			let profilePictureURL = currentData.profilePicture;
			if (formData.profilePicture) {
				const newFileName = formData.profilePicture.name;
				if (
					!profilePictureURL ||
					!profilePictureURL.includes(newFileName)
				) {
					const result = await uploadToFirebase(
						formData.profilePicture,
						'profiles_Images',
						currentData.profilePicture
					);
					profilePictureURL = result.downloadURL;
				}
			}
			await updateDoc(userRef, {
				physical: formData.physical,
				exercises: formData.exercises,
				socialMedia: formData.socialMedia,
				plateConfiguration: formData.plateConfiguration,
				name: formData.name,
				dateOfBirth: formData.dateOfBirth,
				profilePicture: profilePictureURL,
				updatedAt: serverTimestamp(),
			});

			toast.success('Profile Update successfully!');
		} catch (error) {
			console.error('Error saving data:', error);
			toast.error('Failed to save.');
		}
	}
);
