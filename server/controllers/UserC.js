// import mAdmin from "../db/Conn.js";
import { db } from "../db/conn2.js";
import { doc, getDoc } from "firebase/firestore";

class UserController {
    constructor () {}

    transactions = async (req, res) => {
        try {
            const user = req.user;
            let success;
            const pending = [];
            const uid = user.uid;

            const userRef = doc(db, 'users', uid);
            const userDoc = await getDoc(userRef);
            if (!userDoc.exists) {
                console.log('No such document!');
            } else {
                // console.log('Document data:', userDoc.data());
                const data = userDoc.data();
                if (!data.transactions) {
                    return res.status(200).json({success, pending});
                }
                for (const t of data.transactions) {
                    if (t.payment) {
                        // success.push(t);
                        success = t;
                    }
                    else {
                        pending.push(t);
                    }
                }
            }
            return res.status(200).json({success, pending});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    }
}

export default UserController;