import admin from "firebase-admin";
// import firebaseConfig from "../env/fb.json";
import service from "../env/service.js";
import dotenv from "dotenv";
// import { getFirestore } from "firebase/firestore";
import {getFirestore} from "firebase-admin/firestore";
dotenv.config();

const mAdmin =  admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: process.env.databaseURL

});

const db = getFirestore(mAdmin);
// const db = mAdmin.firestore();

// export default mAdmin;
export {db, mAdmin};


