// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4lUHB9KZdC1UGAVWBum-xHBnTkyB6yks",
  authDomain: "oculus2024-3bf29.firebaseapp.com",
  databaseURL: "https://oculus2024-3bf29-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oculus2024-3bf29",
  storageBucket: "oculus2024-3bf29.appspot.com",
  messagingSenderId: "785524084256",
  appId: "1:785524084256:web:c8e500fcc9fce8fb787645",
  measurementId: "G-61ESLFYRTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider, db};