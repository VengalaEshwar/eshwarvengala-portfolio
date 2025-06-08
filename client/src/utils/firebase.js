// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2co4jRMeIRoA8AmPBNYGPBqLVJCq8zUM",
  authDomain: "eshwarvengala-portfolio.firebaseapp.com",
  projectId: "eshwarvengala-portfolio",
  storageBucket: "eshwarvengala-portfolio.appspot.com",
  messagingSenderId: "167075738828",
  appId: "1:167075738828:web:d97338d8f962d7d65fbe69",
  measurementId: "G-LX8RT3M158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, doc, getDoc, setDoc, updateDoc };
