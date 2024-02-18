import dotenv from "dotenv";
import admin from 'firebase-admin';
import mAdmin from "../db/Conn.js";

dotenv.config();

const auth = async (req, res, next) => {
  
  // const idToken = req.headers.authorization;
  const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYzU4NjcwNGNhOTZiZDcwMzZiMmYwZDI4MGY5NDlmM2E5NzZkMzgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU3RlcGhlbiBWYXoiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSW5wREtsSml0SUxEU0M5bTEzdlhsY043ZDBQSkliZ1ZZU3J1V0YtcHk5X2pvPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL29jdWx1czIwMjQtM2JmMjkiLCJhdWQiOiJvY3VsdXMyMDI0LTNiZjI5IiwiYXV0aF90aW1lIjoxNzA4MjU3ODEyLCJ1c2VyX2lkIjoidFZxbU9PRDVyRE5ZakpEdXhnbktEU3NGMzFpMiIsInN1YiI6InRWcW1PT0Q1ckROWWpKRHV4Z25LRFNzRjMxaTIiLCJpYXQiOjE3MDgyNTc4MTIsImV4cCI6MTcwODI2MTQxMiwiZW1haWwiOiJzdGVwaGVudmF6MjAwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMDY3Nzg4NTc3MjY5Nzk2MzAxMSJdLCJlbWFpbCI6WyJzdGVwaGVudmF6MjAwM0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.Z6B8raFGY6RJrWmX2Q_WgwTlYingnpSNSksMihaNWdBdelLpiPOPGA3iJtbqBNMIZtsVZsToNdtA3DLN9OJiRBkUeTYNmhu56aKfANkdyUygnKrODMGK8J9bj9BueIoa8EvPzdHK_E6alDkMSqab3Dgiw43koWx9eLI9178OUdlRLxjBtC_pzmWbli2StAofIxqR0uxT4rGR7K0tcgAqZW5kvTzzZK9TkO0bbvYdj0JQfiBFHB4EqFM3pR_IpJzRPAjdC9kSlSJanA-qNlCbFjcvs8EL0K7gmVK4-s4oHuVkN7EITvp89yknWLa-sQxdFYL0-rPudliEvAk55pp-0g"

  try {
    if (!idToken) {
      throw new Error('No token provided');
    }

    // Verify the ID token
    const decodedToken = await admin.auth(mAdmin).verifyIdToken(idToken);
    req.user = decodedToken; // Attach user data to request object
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorized User', error: error.message });
  }
};

export default auth;