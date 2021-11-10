import { model, Schema } from "mongoose";
import { IProducts } from "../models/interfaces/interfaces";

const productsSchema: Schema = new Schema({
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

export default model<IProducts>("Products", productsSchema);
