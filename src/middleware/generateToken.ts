import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../../Ecommerce/server/.env" });

const secret: any = process.env.JWT_SECRET;

export const tokenGen = (user: any) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email, password: "" },
    secret,
    { expiresIn: "1hr" }
  );
};
