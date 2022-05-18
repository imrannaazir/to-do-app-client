// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAYz5R35hkCKmYmhHtbl-vXzMm0Od9nHQ",
    authDomain: "to-do-trucker.firebaseapp.com",
    projectId: "to-do-trucker",
    storageBucket: "to-do-trucker.appspot.com",
    messagingSenderId: "898310908602",
    appId: "1:898310908602:web:a650a8cb19fd8792ecb083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)