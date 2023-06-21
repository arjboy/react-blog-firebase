// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ct9KGKxuD4482dzTTgxWr0UpaHkX76Y",
  authDomain: "blog-88a92.firebaseapp.com",
  projectId: "blog-88a92",
  storageBucket: "blog-88a92.appspot.com",
  messagingSenderId: "355003377935",
  appId: "1:355003377935:web:4ddcfecda2ef1d30c4f67a",
  measurementId: "G-QC18V9R6YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app) 