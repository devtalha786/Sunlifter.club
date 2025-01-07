// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBfzEEj3fHqABCX4-zezr_5UHSUm0FEX80',
	authDomain: 'sunlifterclub.firebaseapp.com',
	projectId: 'sunlifterclub',
	storageBucket: 'sunlifterclub.firebasestorage.app',
	messagingSenderId: '597353066196',
	appId: '1:597353066196:web:7df1d012dff892e4975541',
	measurementId: 'G-2ZM08NSZHC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
