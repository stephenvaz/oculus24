import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebaseConfig from "../env/mfirebase_config.js";
import dotenv from "dotenv";
dotenv.config();

const firebaseApp = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId

});

export { firebaseApp };

// export const firestore_db = getFirestore(firebaseApp);

