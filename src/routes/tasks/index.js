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
import { adminGuard, columnGuard, taskGuard } from "../../middlewares/index.js";

const router = express.Router();

router.get("/get-all-tasks", adminGuard(), getAllTaskController);
router.get(
  "/get-task/:taskId",
  validate(taskIdParamValidator),
  taskGuard("taskId"),
  getTaskByIdController
);
router.post(
  "/create-task/:columnId",
  validate(columnIdParamValidator, createTaskBodyValidator),
  columnGuard("columnId"),
  createTaskController
);
router.get(
  "/get-column-tasks/:columnId",
  validate(columnIdParamValidator),
  columnGuard("columnId"),
  getColumnTaskController
);
router.patch(
  "/update-task/:taskId",
  validate(taskIdParamValidator, updateTaskBodyValidator),
  taskGuard("taskId"),
  updateTaskController
);
router.delete(
  "/delete-task/:taskId",
  validate(taskIdParamValidator),
  taskGuard("taskId"),
  deleteTaskController
);

export default router;
