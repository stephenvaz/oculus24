import { db } from "../db/Conn.js";

class UserController {
    constructor() {}

    transactions = async (req, res) => {
        try {
            const user = req.user;
            let success;
            const pending = [];
            const uid = user.uid;

            const userRef = db.collection('users').doc(uid);
            const userDoc = await userRef.get();
            
            if (!userDoc.exists) {
                console.log('No such document!');
            } else {
                const data = userDoc.data();
                // console.log('data:', data);
                if (!data.transactions) {
                    return res.status(200).json({ success, pending });
                }
                for (const t of data.transactions) {
                    if (t.payment) {
                        success = t;
                    } else {
                        pending.push(t);
                    }
                }
            }
            return res.status(200).json({ success, pending });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    }
}

export default UserController;