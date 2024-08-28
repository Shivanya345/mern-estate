// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-d9a6d.firebaseapp.com",
  projectId: "estate-d9a6d",
  storageBucket: "estate-d9a6d.appspot.com",
  messagingSenderId: "459961333725",
  appId: "1:459961333725:web:61a09c2e5a10897db6a834"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);