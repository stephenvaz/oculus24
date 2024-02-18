import mAdmin from "../db/Conn.js";

class UserController {
    constructor () {}

    transactions = async (req, res) => {
        try {
            const user = req.user;
            const transactions = []
            // const transactions = await user.getTransactions();
            // fetch data from firestore
            // transactions should only have 1 sucessful transaction
            // if there is more than 1, then there is a problem
            // but such a scenario will never arise
            console.log(user);
            const uid = user.uid;
            const userRef = mAdmin.collection('users').doc(uid);
            const userDoc = await userRef.get();
            if (!userDoc.exists) {
                console.log('No such document!');
            } else {
                console.log('Document data:', userDoc.data());
                const data = userDoc.data();
                transactions.push(data.transaction);
            }
            return res.status(200).json({transactions});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    }
}

export default UserController;