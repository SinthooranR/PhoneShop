// server code in here
import express from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import { loginRouter } from "./routes/login";
import "dotenv/config";
import { cartRouter } from "./routes/cart";
import { accountRouter } from "./routes/account";
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const url = `${process.env.MONGO_URI}`;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(loginRouter);
app.use(cartRouter);
app.use(accountRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Running on Port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
