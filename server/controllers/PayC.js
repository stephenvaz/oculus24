import razorpay from 'razorpay';
import shortid from 'shortid';
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
            // const { amount } = req.body;
            //TODO: ideally amount should be calculated on the server side to avoid any manipulation
            let amount = 1000;

            const {name, email, wca_id, phone, event} = req.body;

            const user = req.user;

            // console.log("user:", user);
            console.log(req.body);
            if (event == 8) {
                amount = 1200;
            }

            

            const options = {
                amount: amount *100,
                currency: "INR",
                receipt: shortid.generate(),
                payment_capture: 1
            };
            // instance.orders.create(options, (err, order) => {
            //     if (err) {
            //         return res.status(500).json({ error: err });
            //     }
            //     return res.status(200).json(order);
            // });
            const response = await instance.orders.create(options);
            console.log("response from razorpay");
            console.log(response);

            // TODO: save the order id in the database

            

            //TODO: use this id to notify user that their payment was successful
                    // payments by order id endpoint is available in the razorpay api
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
}

export default PayController;