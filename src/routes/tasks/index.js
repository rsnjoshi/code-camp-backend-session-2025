import express from "express";
import {
  getAllTaskController,
  getTaskByIdController,
  getColumnTaskController,
  updateTaskController,
  deleteTaskController,
  createTaskController,
} from "./controllers/index.js";

const router = express.Router();

router.get("/get-all-tasks", getAllTaskController);
router.get("/get-task/:taskId", getTaskByIdController);
router.post("/create-task/:columnId", createTaskController);
router.get("/get-column-tasks/:columnId", getColumnTaskController);
router.patch("/update-task/:taskId", updateTaskController);
router.delete("/delete-task/:taskId", deleteTaskController);

export default router;
