import razorpay from 'razorpay';
import shortid from 'shortid';
import { db } from "../db/conn2.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config();

const instance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

class PayController {
    constructor () {}

    pay = async (req, res) => {
        try {
            let amount = 1000;

            const {name, email, wca_id, phone, event} = req.body;

            const user = req.user;

            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);
            const userDocData = userDoc.data();

            if (!userDoc.exists) {
                console.log('No such document!');
                return res.status(400).json({error: "User not found"});
            }
            
            // check the transactions array, if there is an order with payments as not null, then return an error saying that the user has already paid for the event
            for (const t of userDocData.transactions) {
                    if (t.payment) {
                        console.log("User has already paid for the event")
                        return res.status(400).json({error: "User has already paid for the event"});
                    }
            }

            // all good
            // create the order
            if (event == 8) {
                amount = 1200;
            }
            else if (event == 4) { 
                amount = 1000;
            }
            else {
                return res.status(400).json({error: "Invalid event"});
            }
            
            const options = {
                amount: amount *100,
                currency: "INR",
                receipt: shortid.generate(),
                notes: {
                    name: name,
                    email: email,
                    wca_id: wca_id,
                    phone: phone,
                    event: event
                }
            };
            const response = await instance.orders.create(options);

            // TODO: save the order id in the database

            const data2add = {
                order: response
            }

            if (!userDocData.transactions) {
                userDocData.transactions = [];
            }
            userDocData.transactions.push(data2add);

            // save the transaction in the database
            await setDoc(userRef, userDocData);

            return res.json({
              id: response.id,
              currency: response.currency,
              amount: response.amount,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    }

    addPayment = async (req, res) => {
        try {
            const { payment } = req.body;

            const user = req.user;

            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);
            const userDocData = userDoc.data();
            // there will definitely be a transaction array
            // find the one with the order id (razorpay_order_id) and update it
            
            for (const t of userDocData.transactions) {
                if (t.order.id === payment.razorpay_order_id) {
                    t.payment = payment;
                    break;
                }
            }

            await setDoc(userRef, userDocData);

            for (const t of userDocData.transactions) {
                if (t.payment) {
                    console.log("Payment added successfully");
                    return res.status(200).json({message: "Payment added successfully", data: t});
                }
            }


            // return res.status(200).json({message: "Payment added successfully", order: });
            return res.status(400).json({error: "Payment not added"});

        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    }
}

export default PayController;