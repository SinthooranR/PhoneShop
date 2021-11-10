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
exports.getUser = exports.loginUser = exports.registerUser = void 0;
const userSchema_1 = __importDefault(require("../models/userSchema"));
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = require("../middleware/generateToken");
// Controller to Help with Login and Registering Calls
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    let validateError = (0, express_validator_1.validationResult)(req);
    if (!validateError.isEmpty()) {
        res.status(422).json({ errors: validateError.array() });
    }
    else {
        //Checks if a user exists in the databasxxe
        let existingUser;
        try {
            // finds one document that matches
            existingUser = yield userSchema_1.default.findOne({ email: email });
        }
        catch (err) {
            res.status(500).send({ err: err, msg: "Cannot Access Database" });
        }
        // checks if user exists already
        if (existingUser) {
            res.status(500).send({ msg: "User Already Exists" });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        //Setup for the new User created
        const newUser = new userSchema_1.default({
            name,
            email,
            password: hashedPassword,
            balance: 100000,
            cart: [],
            shipping: {},
        });
        try {
            yield newUser.save();
            const token = (0, generateToken_1.tokenGen)(newUser);
            res.status(201).json(Object.assign(Object.assign({ token }, newUser._doc), { message: "Signed Up" }));
        }
        catch (err) {
            res.status(500).send({ msg: "Cannot Register the User" });
        }
    }
});
exports.registerUser = registerUser;
// LOGIN CONTROLLER
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let validateError = (0, express_validator_1.validationResult)(req);
    let token;
    if (!validateError.isEmpty()) {
        res.status(422).json({ errors: validateError.array() });
    }
    else {
        let existingUser;
        //Checks if a user exists in the databasxxe
        try {
            existingUser = yield userSchema_1.default.findOne({ email: email });
            if (existingUser) {
                //Checks if credentials match database ones
                const passwordCompare = yield bcryptjs_1.default.compare(password, existingUser.password);
                if (!passwordCompare) {
                    res.status(422).send({ msg: "Password is Incorrect" });
                }
                token = (0, generateToken_1.tokenGen)(existingUser);
                res.status(201).json(Object.assign(Object.assign({ token }, existingUser._doc), { message: "Logged In" }));
            }
            else {
                res.status(422).send({ msg: "Email isn't in Database" });
            }
        }
        catch (err) {
            res.status(500).send({ msg: "Error Logging into this Account" });
        }
    }
});
exports.loginUser = loginUser;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.id;
    let user;
    try {
        user = yield userSchema_1.default.findById(userId);
        if (user) {
            res.json({
                users: user.toObject({ getters: true }),
            });
        }
    }
    catch (err) {
        res.status(500).send({ msg: "Cannot find the User, Please Try Later" });
    }
});
exports.getUser = getUser;
