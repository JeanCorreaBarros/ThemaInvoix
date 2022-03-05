import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyATMNro9MVmTaSfby5UoLXongG7GSwmZdk",
  authDomain: "login-genomax.firebaseapp.com",
  projectId: "login-genomax",
  storageBucket: "login-genomax.appspot.com",
  messagingSenderId: "732569596870",
  appId: "1:732569596870:web:2b6d8505811a115b2f38c7"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);


