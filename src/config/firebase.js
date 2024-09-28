// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBqECtIobQtL-Y3C5m0Gslu6UixhadqG4",
  authDomain: "vite-react-c768e.firebaseapp.com",
  projectId: "vite-react-c768e",
  storageBucket: "vite-react-c768e.appspot.com",
  messagingSenderId: // GET UR OWN CODES HERE
  appId: 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
