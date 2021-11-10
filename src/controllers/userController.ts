import UserSchema from "../models/userSchema";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { IUser } from "../models/interfaces/interfaces";
import { tokenGen } from "../middleware/generateToken";

// Controller to Help with Login and Registering Calls

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  let validateError = validationResult(req);

  if (!validateError.isEmpty()) {
    res.status(422).json({ errors: validateError.array() });
  } else {
    //Checks if a user exists in the databasxxe
    let existingUser;

    try {
      // finds one document that matches
      existingUser = await UserSchema.findOne({ email: email });
    } catch (err) {
      res.status(500).send({ err: err, msg: "Cannot Access Database" });
    }

    // checks if user exists already
    if (existingUser) {
      res.status(500).send({ msg: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    //Setup for the new User created
    const newUser = new UserSchema({
      name,
      email,
      password: hashedPassword,
      balance: 100000,
      cart: [],
      shipping: {},
    });

    try {
      await newUser.save();
      const token = tokenGen(newUser);

      res.status(201).json({
        token,
        ...newUser._doc,
        message: "Signed Up",
      });
    } catch (err) {
      res.status(500).send({ msg: "Cannot Register the User" });
    }
  }
};

// LOGIN CONTROLLER
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  let validateError = validationResult(req);
  let token;

  if (!validateError.isEmpty()) {
    res.status(422).json({ errors: validateError.array() });
  } else {
    let existingUser: IUser | null;

    //Checks if a user exists in the databasxxe
    try {
      existingUser = await UserSchema.findOne({ email: email });

      if (existingUser) {
        //Checks if credentials match database ones
        const passwordCompare = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (!passwordCompare) {
          res.status(422).send({ msg: "Password is Incorrect" });
        }

        token = tokenGen(existingUser);
        res.status(201).json({
          token,
          ...existingUser._doc,
          message: "Logged In",
        });
      } else {
        res.status(422).send({ msg: "Email isn't in Database" });
      }
    } catch (err) {
      res.status(500).send({ msg: "Cannot Log into this Account" });
    }
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userId = req.params.id;
  let user: IUser | null;
  try {
    user = await UserSchema.findById(userId);
    if (user) {
      res.json({
        users: user.toObject({ getters: true }),
      });
    }
  } catch (err) {
    res.status(500).send({ msg: "Cannot find the User, Please Try Later" });
  }
};
