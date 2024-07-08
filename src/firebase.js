// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsv4EQgp7UlY03xLv25I5AWUYtDSzcsjs",
  authDomain: "budgetbuddy-8b51e.firebaseapp.com",
  projectId: "budgetbuddy-8b51e",
  storageBucket: "budgetbuddy-8b51e.appspot.com",
  messagingSenderId: "923627167977",
  appId: "1:923627167977:web:6be0a2c71504d86682d078",
  measurementId: "G-MHYRQ7T44B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };