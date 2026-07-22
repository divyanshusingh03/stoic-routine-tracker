import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyCoRPiuM9usbBWp8_dWam6n7TejR2H1vLg",
  authDomain: "stoic-routine-tracker.firebaseapp.com",
  projectId: "stoic-routine-tracker",
  storageBucket: "stoic-routine-tracker.firebasestorage.app",
  messagingSenderId: "93505558992",
  appId: "1:93505558992:web:512fc4eb942ace609941d5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);