import UserController from "../controllers/UserC.js";
import express from "express";
import auth from "../middlewares/auth.js";

const userRouter = express.Router();

const userC = new UserController();

userRouter.get("/transactions", auth, userC.transactions);

export default userRouter;