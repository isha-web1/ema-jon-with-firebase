// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZcvIVJUmVdMwhpB9JeVc7v9VDjZsIOmA",
  authDomain: "ema-jon-with-firebase-8e23e.firebaseapp.com",
  projectId: "ema-jon-with-firebase-8e23e",
  storageBucket: "ema-jon-with-firebase-8e23e.appspot.com",
  messagingSenderId: "708453789136",
  appId: "1:708453789136:web:2207fb27974007fe351dd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;