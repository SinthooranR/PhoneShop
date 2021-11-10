import { Document } from "mongoose";

export interface IUser extends Document {
  _doc: any | null;
  name: string;
  email: string;
  password: string;
  balance: Number;
  cart: [ICart] | null;
  shipping: Object;
}

export interface ICart extends Document {
  userId: IUser["_id"];
  productId: IProducts["_id"];
  productName: string;
  productBrand: string;
  productImage: string;
  quantity: Number;
  totalPrice: Number;
}

export interface IProducts extends Document {
  productName: string;
  productBrand: string;
  productImage: string;
  stock: Number;
  price: Number;
  specifications: [IProdSpecs] | null;
}

export interface IProdSpecs extends Document {
  storage: Number;
  ram: Number;
  battery: string;
  os: string;
  size: Number;
  resolution: string;
}
