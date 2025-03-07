// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEhjHBPrCo1BLJp9Me0XEY_BoOIQV50ds",
  authDomain: "netflixgpt-a851f.firebaseapp.com",
  projectId: "netflixgpt-a851f",
  storageBucket: "netflixgpt-a851f.firebasestorage.app",
  messagingSenderId: "421363092886",
  appId: "1:421363092886:web:2196ac74a377e7c63d21b7",
  measurementId: "G-6C310WK0VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();