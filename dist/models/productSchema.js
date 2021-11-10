"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
    },
    productBrand: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Products", productsSchema);
