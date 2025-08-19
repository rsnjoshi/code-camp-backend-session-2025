import express from "express";
import healthCheckRouter from "./health/index.js";
import userRouter from "./users/index.js";

const router = express.Router();

router.use("/health", healthCheckRouter);
router.use("/users", userRouter);

export default router;
