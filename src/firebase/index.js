// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHRJbQASHcc-6dhwqdVdu6kQf2rLxClpM",
  authDomain: "gtdtest-2.firebaseapp.com",
  projectId: "gtdtest-2",
  storageBucket: "gtdtest-2.appspot.com",
  messagingSenderId: "235585335439",
  appId: "1:235585335439:web:0e54ee053338014cec00fa",
  measurementId: "G-83LL1G96LQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
const analytics = getAnalytics(app);
