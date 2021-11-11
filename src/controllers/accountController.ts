import UserSchema from "../models/userSchema";
import { Request, Response, NextFunction } from "express";

export const addBilling = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, data } = req.body;
  let user;

  try {
    user = await UserSchema.findById(userId);
    if (user) {
      user["shipping"] = {
        phone: data?.phone,
        address: data.address,
        postalCode: data.postalCode,
        country: data.country,
        city: data.city,
        province: data.province,
      };
    }
    await user?.save();
  } catch (err) {
    res.status(500).send({ msg: "Failed to grab User" });
    return next();
  }
  res.status(201).json({ account: user });
};
