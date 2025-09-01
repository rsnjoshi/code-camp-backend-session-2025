import express from "express";
import {
  getAllColumnsController,
  getColumnByIdController,
  getUserColumnController,
  updateColumnController,
  deleteColumnController,
  createColumnController,
} from "./controllers/index.js";
import { validate } from "../../middlewares/requestValidator.js";
import {
  columnIdParamValidator,
  createColumnBodyValidator,
  updateColumnBodyValidator,
  userIdParamValidator,
} from "./validators.js";
import { adminGuard, columnGuard, userGuard } from "../../middlewares/index.js";

const router = express.Router();

router.get("/get-all-columns", adminGuard(), getAllColumnsController);
router.get(
  "/get-column/:columnId",
  validate(columnIdParamValidator),
  columnGuard("columnId"),
  getColumnByIdController
);
router.post(
  "/create-column/:userId",
  validate(userIdParamValidator, createColumnBodyValidator),
  userGuard("userId"),
  createColumnController
);
router.get(
  "/get-user-columns/:userId",
  validate(userIdParamValidator),
  userGuard("userId"),
  getUserColumnController
);
router.patch(
  "/update-column/:columnId",
  validate(columnIdParamValidator, updateColumnBodyValidator),
  columnGuard("columnId"),
  updateColumnController
);
router.delete(
  "/delete-column/:columnId",
  validate(columnIdParamValidator),
  columnGuard("columnId"),
  deleteColumnController
);

export default router;
