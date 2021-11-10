"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const accountController_1 = require("../controllers/accountController");
const checkToken_1 = require("../middleware/checkToken");
const router = express_1.default.Router();
exports.accountRouter = router;
router.get("/api/user/:id", checkToken_1.jwtAuth, userController_1.getUser);
router.put("/api/user/billing", checkToken_1.jwtAuth, accountController_1.addBilling);
