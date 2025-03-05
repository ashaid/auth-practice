import { body } from "express-validator";

export const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Please include a valid email")
    .normalizeEmail(),
  body("password").exists().withMessage("Password is required"),
];
