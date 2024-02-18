import admin from "firebase-admin";
import service from "../env/service.js";
import dotenv from "dotenv";
import { getFirestore } from "firebase-admin/firestore";

dotenv.config();

const mAdmin = admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: process.env.databaseURL

});

const db = getFirestore(mAdmin);

const authF = admin.auth(mAdmin);

export { db, authF };


