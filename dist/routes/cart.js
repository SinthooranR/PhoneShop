"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../controllers/cartController");
const checkToken_1 = require("../middleware/checkToken");
const router = express_1.default.Router();
exports.cartRouter = router;
router.get("/api/products", checkToken_1.jwtAuth, cartController_1.getAllProducts);
router.post("/api/cart", checkToken_1.jwtAuth, cartController_1.addProductToCart);
router.put("/api/cart", checkToken_1.jwtAuth, cartController_1.updateCart);
router.get("/api/cart/:id", checkToken_1.jwtAuth, cartController_1.getCartByUserId);
router.post("/api/cart/purchase", checkToken_1.jwtAuth, cartController_1.purchaseCart);
