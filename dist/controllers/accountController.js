"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBilling = void 0;
const userSchema_1 = __importDefault(require("../models/userSchema"));
const addBilling = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, data } = req.body;
    let user;
    try {
        user = yield userSchema_1.default.findById(userId);
        if (user) {
            user["shipping"] = {
                phone: data === null || data === void 0 ? void 0 : data.phone,
                address: data.address,
                postalCode: data.postalCode,
                country: data.country,
                city: data.city,
                province: data.province,
            };
        }
        yield (user === null || user === void 0 ? void 0 : user.save());
    }
    catch (err) {
        res.status(500).send({ msg: "Failed to grab User" });
    }
    res.status(201).json({ account: user });
});
exports.addBilling = addBilling;
