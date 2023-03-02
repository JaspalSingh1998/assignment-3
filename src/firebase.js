// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZvyh5EVxxmh_hWLEznghNdPYuhsI-Xqg",
  authDomain: "assignment-3-c04a8.firebaseapp.com",
  projectId: "assignment-3-c04a8",
  storageBucket: "assignment-3-c04a8.appspot.com",
  messagingSenderId: "1071854660349",
  appId: "1:1071854660349:web:d4070619da3008130aec94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;