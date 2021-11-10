"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGen = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../../Ecommerce/server/.env" });
const secret = process.env.JWT_SECRET;
const tokenGen = (user) => {
    return jsonwebtoken_1.default.sign({ id: user._id, name: user.name, email: user.email, password: "" }, secret, { expiresIn: "1hr" });
};
exports.tokenGen = tokenGen;
