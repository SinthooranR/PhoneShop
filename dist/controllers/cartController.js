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
exports.purchaseCart = exports.getAllProducts = exports.getCartByUserId = exports.updateCart = exports.addProductToCart = void 0;
const cartSchema_1 = __importDefault(require("../models/cartSchema"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const productSchema_1 = __importDefault(require("../models/productSchema"));
const express_validator_1 = require("express-validator");
const addProductToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, userId, productId } = req.body;
    let validateError = (0, express_validator_1.validationResult)(req);
    if (!validateError.isEmpty()) {
        res.status(422).json({ errors: validateError.array() });
    }
    else {
        let user;
        let product;
        let cart;
        try {
            user = yield userSchema_1.default.findById(userId);
        }
        catch (err) {
            res.status(500).send({ err: err, msg: "Cannot find this User" });
        }
        try {
            product = yield productSchema_1.default.findOne({ _id: productId });
            cart = yield cartSchema_1.default.findOne({ productId: productId, userId: userId });
        }
        catch (err) {
            res.status(500).send({ err: err, msg: "Cannot find this Product" });
        }
        let totalPrice = Number(product === null || product === void 0 ? void 0 : product.price) * Number(quantity);
        let newItem = new cartSchema_1.default({
            productId: productId,
            productName: product === null || product === void 0 ? void 0 : product.productName,
            productBrand: product === null || product === void 0 ? void 0 : product.productBrand,
            productImage: product === null || product === void 0 ? void 0 : product.productImage,
            quantity: quantity,
            totalPrice: totalPrice,
            userId: userId,
        });
        try {
            if (user && user.cart) {
                if (cart && cart.quantity > 0 && product) {
                    cart["quantity"] = Number(cart["quantity"]) + Number(quantity);
                    cart["totalPrice"] =
                        Number(product["price"]) * Number(cart["quantity"]);
                    yield cart.save();
                }
                else {
                    yield newItem.save(); //saves the newItem in its Collection
                    user.cart.push(newItem); //adds the data into the users cart array storage
                    yield user.save(); //updates the users data
                }
            }
            if (product && product.stock > Number(quantity)) {
                product["stock"] = Number(product["stock"]) - Number(quantity);
                yield product.save();
            }
        }
        catch (err) {
            res.status(500).send({ msg: "Failed to Add to Cart" });
        }
        res.status(201).json({ cart: cart ? cart : newItem, product: product });
    }
});
exports.addProductToCart = addProductToCart;
const updateCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, cartId, productId } = req.body;
    let cartItem;
    let product;
    let quantityChange;
    let totalStock;
    // Add/Remove the shop stock
    try {
        product = yield productSchema_1.default.findOne({ _id: productId });
        cartItem = yield cartSchema_1.default.findById(cartId);
        if (product && cartItem) {
            quantityChange = Number(cartItem["quantity"]) - Number(quantity);
            totalStock = Number(cartItem["quantity"]) + Number(product["stock"]);
            if (quantity <= totalStock) {
                cartItem["quantity"] = quantity;
                cartItem["totalPrice"] = Number(product["price"]) * Number(quantity);
                if (cartItem["quantity"] === 0) {
                    cartItem.deleteOne({ _id: cartId });
                }
                else {
                    yield cartItem.save();
                }
                product["stock"] = Number(product["stock"]) + Number(quantityChange);
                yield product.save();
            }
            else {
                res
                    .status(422)
                    .send({ msg: "Cannot Exceed the remaining Product Stock" });
                next();
            }
        }
    }
    catch (err) {
        res.status(500).send({ msg: "Cannot find this Product in Cart" });
    }
    res.status(201).json({ cartItem: cartItem, product: product });
});
exports.updateCart = updateCart;
const getCartByUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let cart;
    const userId = req.params.id;
    let totalSum;
    try {
        cart = yield userSchema_1.default.findById(userId).populate("cart");
    }
    catch (err) {
        res.status(500).send({ msg: "Failed to find User" });
    }
    if (cart) {
        totalSum = cart["cart"].reduce((a, { totalPrice }) => a + totalPrice, 0);
    }
    if (!cart) {
        res.status(500).send({ msg: "Failed to find Cart" });
    }
    res.status(201).json({ cart: cart.cart, totalSum: totalSum });
});
exports.getCartByUserId = getCartByUserId;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let products;
    try {
        products = yield productSchema_1.default.find();
    }
    catch (err) {
        res.status(500).send({ msg: "Failed to retrieve Products" });
    }
    if (!products) {
        res.status(500).send({ msg: "Failed to retrieve Cart" });
    }
    res.status(201).json({ products: products });
});
exports.getAllProducts = getAllProducts;
const purchaseCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    let user;
    let cart;
    let deleteCart;
    try {
        user = yield userSchema_1.default.findById(userId).populate("cart");
        cart = yield cartSchema_1.default.find({ userId: userId });
        if (user) {
            const totalSum = user["cart"].reduce((a, { totalPrice }) => a + totalPrice, 0);
            const { phone, address, postalCode, city, country, province } = user["shipping"];
            if (phone && address && postalCode && city && country && province) {
                if (user["balance"] > totalSum) {
                    user["balance"] = user["balance"] - totalSum;
                    yield cartSchema_1.default.deleteMany({ userId: userId });
                    user["cart"] = [];
                    yield user.save();
                }
                else {
                    res.status(422).send({ msg: "Insufficient Balance" });
                }
            }
            else {
                res
                    .status(422)
                    .send({ msg: "Please finish the Shipping Information in Profile" });
            }
        }
    }
    catch (err) {
        res.status(500).send({ msg: "Failed to Add to Cart" });
    }
    res.status(201).json({ user: user });
});
exports.purchaseCart = purchaseCart;
