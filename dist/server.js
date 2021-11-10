"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server code in here
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const login_1 = require("./routes/login");
require("dotenv/config");
const cart_1 = require("./routes/cart");
const account_1 = require("./routes/account");
const path = require("path");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const url = `${process.env.MONGO_URI}`;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(login_1.loginRouter);
app.use(cart_1.cartRouter);
app.use(account_1.accountRouter);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}
mongoose_1.default
    .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    app.listen(PORT, () => {
        console.log("Server Running on Port: " + PORT);
    });
})
    .catch((error) => {
    console.log(error);
});
