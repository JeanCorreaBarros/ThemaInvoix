// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALhGNULFpW6RNcdEJNeBk8J-tKTNGj4_w",
  authDomain: "thema-genomax.firebaseapp.com",
  projectId: "thema-genomax",
  storageBucket: "thema-genomax.appspot.com",
  messagingSenderId: "972472088451",
  appId: "1:972472088451:web:02a80b7772208e1f3868b6",
  measurementId: "G-1BTMF0GWSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);