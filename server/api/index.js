import express from "express";
import cors from "cors";
import authRouter from "../Router/Auth.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loggerMware = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} | ${req.method} | ${req.originalUrl}`)
  next();
};

app.use(loggerMware);

app.get("/", (req, res) => {
  res.send("API v0.0.1");
});
app.use("/auth", authRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.clear()
  console.log(`Server: http://localhost:${PORT}`);
});