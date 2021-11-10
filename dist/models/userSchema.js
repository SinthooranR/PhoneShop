"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const billingSchema = new mongoose_1.Schema({
    phone: String,
    address: String,
    postalCode: String,
    country: String,
    city: String,
    province: String,
});
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    cart: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            required: true,
            ref: "Cart", //connects current scheme with another Schema
        },
    ],
    shipping: {
        type: billingSchema,
        required: true,
    },
});
// exports with the correct collection and schema using mongoose
exports.default = (0, mongoose_1.model)("User", userSchema);
