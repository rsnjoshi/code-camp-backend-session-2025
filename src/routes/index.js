import express from "express";
import healthCheckRouter from "./health/index.js";
import userRouter from "./users/index.js";
import columnRouter from "./columns/index.js";
import taskRouter from "./tasks/index.js";
import authRouter from "./auth/index.js";
import { tokenValidator } from "../middlewares/index.js";

const router = express.Router();

router.use("/health", healthCheckRouter);
router.use("/users", tokenValidator(), userRouter);
router.use("/columns", tokenValidator(), columnRouter);
router.use("/tasks", tokenValidator(), taskRouter);
router.use("/auth", authRouter);

export default router;
