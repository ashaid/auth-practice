import { Router } from "express";
import { login } from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";
import { loginValidator } from "../validators/authValidators";

const router = Router();

router.post("/login", loginValidator, login);

export default router;
