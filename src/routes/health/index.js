import express from "express";

import {
  healthCheckController,
  echoServerController,
} from "./controllers/index.js";

const router = express.Router();

router.get("/check-server-health", healthCheckController);
router.post("/echo-server", echoServerController);

export default router;
