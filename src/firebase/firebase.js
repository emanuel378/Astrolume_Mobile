import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmW20tvjp0UwwfQV7cvLz0DFIlu6NTObc",
  authDomain: "astrolume-4b423.firebaseapp.com",
  projectId: "astrolume-4b423",
  storageBucket: "astrolume-4b423.firebasestorage.app",
  messagingSenderId: "105431774336",
  appId: "1:105431774336:web:3501c79fd77aafe3eb6265",
  measurementId: "G-2WYJV18TLL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
