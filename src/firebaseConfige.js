// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFu3txnBDK5kkW97c9Lf66I-ntFNN0G8Y",
  authDomain: "plan-your-proje.firebaseapp.com",
  databaseURL:
    "https://plan-your-proje-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plan-your-proje",
  storageBucket: "plan-your-proje.appspot.com",
  messagingSenderId: "1077008385471",
  appId: "1:1077008385471:web:52fc5041f684c07dbccd0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const RTDB = getDatabase(app);
