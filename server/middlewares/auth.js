import dotenv from "dotenv";
import admin from 'firebase-admin';
import {mAdmin} from "../db/Conn.js";

dotenv.config();

const auth = async (req, res, next) => {
  
  const idToken = req.headers.authorization;

  try {
    if (!idToken) {
      throw new Error('No token provided');
    }

    const decodedToken = await admin.auth(mAdmin).verifyIdToken(idToken);
    req.user = decodedToken;
    // console.log('decodedToken:', decodedToken);
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorized User', error: error.message });
  }
};

export default auth;