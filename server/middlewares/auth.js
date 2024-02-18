import dotenv from "dotenv";
import {authF} from "../db/Conn.js";

dotenv.config();

const auth = async (req, res, next) => {
  
  const idToken = req.headers.authorization;

  try {
    if (!idToken) {
      throw new Error('No token provided');
    }

    const decodedToken = await authF.verifyIdToken(idToken);
    req.user = decodedToken;
    // console.log('decodedToken:', decodedToken);
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorized User', error: error.message });
  }
};

export default auth;