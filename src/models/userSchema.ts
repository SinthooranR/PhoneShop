import { model, Schema } from "mongoose";
import { IUser } from "./interfaces/interfaces";

const billingSchema = new Schema({
  phone: String,
  address: String,
  postalCode: String,
  country: String,
  city: String,
  province: String,
});

const userSchema: Schema = new Schema({
  name: {
    type: String, //gets URL not a actual file
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
      type: Schema.Types.ObjectId, //helps mongo determine the id
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
export default model<IUser>("User", userSchema);
