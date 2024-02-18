import admin from "firebase-admin";
// import firebaseConfig from "../env/fb.json";
import service from "../env/service.js";


const mAdmin =  admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: "https://oculus2024-3bf29-default-rtdb.asia-southeast1.firebasedatabase.app"

});

export default mAdmin;


