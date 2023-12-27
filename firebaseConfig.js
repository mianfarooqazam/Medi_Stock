import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBP0g5mGkujidz9KmJHnd43hY9oQSDDGcw",
    authDomain: "medistock-61905.firebaseapp.com",
    projectId: "medistock-61905",
    storageBucket: "medistock-61905.appspot.com",
    messagingSenderId: "982687367000",
    appId: "1:982687367000:web:66b3a8eeb5732ca4d56f2d",
    measurementId: "G-ERLCZX8233"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
