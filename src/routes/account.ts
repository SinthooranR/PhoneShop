import express from "express";
import { check } from "express-validator";
import { getUser } from "../controllers/userController";
import { addBilling } from "../controllers/accountController";
import { jwtAuth } from "../middleware/checkToken";

const router = express.Router();

router.get("/api/user/:id", jwtAuth, getUser);

router.put("/api/user/billing", jwtAuth, addBilling);

export { router as accountRouter };
