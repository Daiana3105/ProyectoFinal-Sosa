// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY5wE3gmcgYWUp7FuPSh0141AN71X2g9o",
  authDomain: "coder-project-682c7.firebaseapp.com",
  projectId: "coder-project-682c7",
  storageBucket: "coder-project-682c7.firebasestorage.app",
  messagingSenderId: "259893184514",
  appId: "1:259893184514:web:d2b71c6ff014b3a5893f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)