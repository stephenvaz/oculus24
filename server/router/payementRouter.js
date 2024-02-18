import express from 'express';
import PayController from '../controllers/PayC.js';
import auth from '../middlewares/auth.js';

const payRouter = express.Router();

const payC = new PayController();


// TODO: need middleware to check if user is legit

// firebase will prob generate a token for the user when using google sign in
// will send that token to the server and the server will verify that token
// but how will i verify it? i need to use the firebase admin sdk to verify the token ig

payRouter.post("/", auth, auth,payC.pay);

// payRouter.get("/", auth, async (req, res) => {
//     res.send("pay get");
// });

export default payRouter;

