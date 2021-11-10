import express from "express";
import { check } from "express-validator";
import { loginUser, registerUser } from "../controllers/userController";

const router = express.Router();

router.post(
  "/api/login",
  [
    check("email", "Must be a valid Email").isEmail(),
    check("password", "Password must be between 6-14 characters").isLength({
      min: 6,
      max: 14,
    }),
  ],
  loginUser
);

router.post(
  "/api/register",
  [
    check("name", "Name must exist!").not().isEmpty(),
    check("email", "Must be a valid Email").isEmail(),
    check("password", "Password must be between 6-10 characters").isLength({
      min: 6,
      max: 10,
    }),
  ],
  registerUser
);

export { router as loginRouter };
