"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
exports.loginRouter = router;
router.post("/api/login", [
    (0, express_validator_1.check)("email", "Must be a valid Email").isEmail(),
    (0, express_validator_1.check)("password", "Password must be between 6-14 characters").isLength({
        min: 6,
        max: 14,
    }),
], userController_1.loginUser);
router.post("/api/register", [
    (0, express_validator_1.check)("name", "Name must exist!").not().isEmpty(),
    (0, express_validator_1.check)("email", "Must be a valid Email").isEmail(),
    (0, express_validator_1.check)("password", "Password must be between 6-10 characters").isLength({
        min: 6,
        max: 10,
    }),
], userController_1.registerUser);
