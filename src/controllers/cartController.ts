import CartSchema from "../models/cartSchema";
import UserSchema from "../models/userSchema";
import ProductSchema from "../models/productSchema";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import cartSchema from "../models/cartSchema";

export const addProductToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { quantity, userId, productId } = req.body;

  let validateError = validationResult(req);

  if (!validateError.isEmpty()) {
    res.status(422).json({ errors: validateError.array() });
  } else {
    let user;
    let product;
    let cart;

    try {
      user = await UserSchema.findById(userId);
    } catch (err) {
      res.status(500).send({ err: err, msg: "Cannot find this User" });
    }

    try {
      product = await ProductSchema.findOne({ _id: productId });
      cart = await CartSchema.findOne({ productId: productId, userId: userId });
    } catch (err) {
      res.status(500).send({ err: err, msg: "Cannot find this Product" });
    }

    let totalPrice: Number = Number(product?.price) * Number(quantity);
    let newItem = new CartSchema({
      productId: productId,
      productName: product?.productName,
      productBrand: product?.productBrand,
      productImage: product?.productImage,
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
          await cart.save();
        } else {
          await newItem.save(); //saves the newItem in its Collection
          user.cart.push(newItem); //adds the data into the users cart array storage
          await user.save(); //updates the users data
        }
      }
      if (product && product.stock > Number(quantity)) {
        product["stock"] = Number(product["stock"]) - Number(quantity);
        await product.save();
      }
    } catch (err) {
      res.status(500).send({ msg: "Failed to Add to Cart" });
    }
    res.status(201).json({ cart: cart ? cart : newItem, product: product });
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { quantity, cartId, productId } = req.body;
  let cartItem;
  let product;
  let quantityChange;
  let totalStock;

  // Add/Remove the shop stock
  try {
    product = await ProductSchema.findOne({ _id: productId });
    cartItem = await CartSchema.findById(cartId);
    if (product && cartItem) {
      quantityChange = Number(cartItem["quantity"]) - Number(quantity);
      totalStock = Number(cartItem["quantity"]) + Number(product["stock"]);
      if (quantity <= totalStock) {
        cartItem["quantity"] = quantity;
        cartItem["totalPrice"] = Number(product["price"]) * Number(quantity);
        if (cartItem["quantity"] === 0) {
          cartItem.deleteOne({ _id: cartId });
        } else {
          await cartItem.save();
        }
        product["stock"] = Number(product["stock"]) + Number(quantityChange);
        await product.save();
      } else {
        res
          .status(422)
          .send({ msg: "Cannot Exceed the remaining Product Stock" });
        next();
      }
    }
  } catch (err) {
    res.status(500).send({ msg: "Cannot find this Product in Cart" });
  }

  res.status(201).json({ cartItem: cartItem, product: product });
};

export const getCartByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let cart: any;
  const userId = req.params.id;
  let totalSum;

  try {
    cart = await UserSchema.findById(userId).populate("cart");
  } catch (err) {
    res.status(500).send({ msg: "Failed to find User" });
  }

  if (cart) {
    totalSum = cart["cart"].reduce(
      (a: any, { totalPrice }: any) => a + totalPrice,
      0
    );
  }

  if (!cart) {
    res.status(500).send({ msg: "Failed to find Cart" });
  }

  res.status(201).json({ cart: cart.cart, totalSum: totalSum });
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let products;
  try {
    products = await ProductSchema.find();
  } catch (err) {
    res.status(500).send({ msg: "Failed to retrieve Products" });
  }

  if (!products) {
    res.status(500).send({ msg: "Failed to retrieve Cart" });
  }

  res.status(201).json({ products: products });
};

export const purchaseCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;
  let user: any;
  let cart: any;
  let deleteCart;

  try {
    user = await UserSchema.findById(userId).populate("cart");
    cart = await CartSchema.find({ userId: userId });
    if (user) {
      const totalSum = user["cart"].reduce(
        (a: any, { totalPrice }: any) => a + totalPrice,
        0
      );
      const { phone, address, postalCode, city, country, province } =
        user["shipping"];
      if (phone && address && postalCode && city && country && province) {
        if (user["balance"] > totalSum) {
          user["balance"] = user["balance"] - totalSum;
          await CartSchema.deleteMany({ userId: userId });
          user["cart"] = [];
          await user.save();
        } else {
          res.status(422).send({ msg: "Insufficient Balance" });
        }
      } else {
        res
          .status(422)
          .send({ msg: "Please finish the Shipping Information in Profile" });
      }
    }
  } catch (err) {
    res.status(500).send({ msg: "Failed to Add to Cart" });
  }

  res.status(201).json({ user: user });
};
