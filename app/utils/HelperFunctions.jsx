
import { storage } from "../config/firebase";
import { serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
export const uploadToFirebase = async (file, path) => {
	const fileName = `${Date.now()}-${file.name}`;
	const storageRef = ref(storage, `${path}/${fileName}`);

	const uploadResult = await uploadBytes(storageRef, file);
	const downloadURL = await getDownloadURL(uploadResult.ref);

	return {
		downloadURL,
		fileName,
		uploadResult,
		createdAt: serverTimestamp(),
	};
};
