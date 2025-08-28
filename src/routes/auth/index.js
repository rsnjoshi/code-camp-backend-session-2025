import express from "express";
import {
  loginUserController,
  registerUserController,
} from "./controllers/index.js";
import { validate } from "../../middlewares/index.js";
import { loginUserValidator, registerUserValidator } from "./validators.js";

const router = express.Router();

router.post(
  "/register-user",
  validate(registerUserValidator),
  registerUserController
);
router.post("/login", validate(loginUserValidator), loginUserController);

export default router;
