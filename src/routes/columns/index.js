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

const router = express.Router();

router.get("/get-all-columns", getAllColumnsController);
router.get(
  "/get-column/:columnId",
  validate(columnIdParamValidator),
  getColumnByIdController
);
router.post(
  "/create-column/:userId",
  validate(userIdParamValidator, createColumnBodyValidator),
  createColumnController
);
router.get(
  "/get-user-columns/:userId",
  validate(userIdParamValidator),
  getUserColumnController
);
router.patch(
  "/update-column/:columnId",
  validate(columnIdParamValidator, updateColumnBodyValidator),
  updateColumnController
);
router.delete(
  "/delete-column/:columnId",
  validate(columnIdParamValidator),
  deleteColumnController
);

export default router;
