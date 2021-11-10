import { model, Schema } from "mongoose";
import { ICart } from "../models/interfaces/interfaces";

const cartSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },

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
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

export default model<ICart>("Cart", cartSchema);
