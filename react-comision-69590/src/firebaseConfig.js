
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBewdPvvjWVR2A6_Scc0TkDmrbbub7EDKk",
  authDomain: "react-comision-69590.firebaseapp.com",
  projectId: "react-comision-69590",
  storageBucket: "react-comision-69590.firebasestorage.app",
  messagingSenderId: "1060884137889",
  appId: "1:1060884137889:web:300e15d880d64f8485ede0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)