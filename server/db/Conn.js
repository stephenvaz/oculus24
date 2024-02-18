import admin from "firebase-admin";
// import firebaseConfig from "../env/fb.json";
import service from "../env/service.js";
import dotenv from "dotenv";
dotenv.config();

const mAdmin =  admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: process.env.databaseURL

});

export default mAdmin;


