import { Router } from "express";
import { login, userInfo } from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";
import { loginValidator } from "../validators/authValidators";

const router = Router();

router.get("/login", loginValidator, login);
router.get("/userInfo", authMiddleware, userInfo);

export default router;
