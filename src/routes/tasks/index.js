import express from "express";
import {
  getAllTaskController,
  getTaskByIdController,
  getColumnTaskController,
  updateTaskController,
  deleteTaskController,
  createTaskController,
} from "./controllers/index.js";
import { validate } from "../../middlewares/requestValidator.js";
import {
  columnIdParamValidator,
  createTaskBodyValidator,
  taskIdParamValidator,
  updateTaskBodyValidator,
} from "./validators.js";

const router = express.Router();

router.get("/get-all-tasks", getAllTaskController);
router.get(
  "/get-task/:taskId",
  validate(taskIdParamValidator),
  getTaskByIdController
);
router.post(
  "/create-task/:columnId",
  validate(columnIdParamValidator, createTaskBodyValidator),
  createTaskController
);
router.get(
  "/get-column-tasks/:columnId",
  validate(columnIdParamValidator),
  getColumnTaskController
);
router.patch(
  "/update-task/:taskId",
  validate(taskIdParamValidator, updateTaskBodyValidator),
  updateTaskController
);
router.delete(
  "/delete-task/:taskId",
  validate(taskIdParamValidator),
  deleteTaskController
);

export default router;
