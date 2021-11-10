import express from "express";
import {
  addProductToCart,
  getAllProducts,
  getCartByUserId,
  purchaseCart,
  updateCart,
} from "../controllers/cartController";
import { jwtAuth } from "../middleware/checkToken";

const router = express.Router();

router.get("/api/products", jwtAuth, getAllProducts);

router.post("/api/cart", jwtAuth, addProductToCart);

router.put("/api/cart", jwtAuth, updateCart);

router.get("/api/cart/:id", jwtAuth, getCartByUserId);

router.post("/api/cart/purchase", jwtAuth, purchaseCart);

export { router as cartRouter };
