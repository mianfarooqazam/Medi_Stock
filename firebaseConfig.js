import { initializeApp } from 'firebase/app';


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
let app;

try {
    app = initializeApp(firebaseConfig);
    console.log('Firebase connected successfully!');
} catch (error) {
    console.error('Error initializing Firebase:', error);
}

export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
