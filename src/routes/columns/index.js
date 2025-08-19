import express from "express";
import {
  getAllColumnsController,
  getColumnByIdConroller,
  getUserColumnController,
  updateColumnController,
  deleteColumnController,
  createColumnController,
} from "./controllers/index.js";

const router = express.Router();

router.get("/get-all-columns", getAllColumnsController);
router.get("/get-column/:columnId", getColumnByIdConroller);
router.post("/create-column/:userId", createColumnController);
router.get("/get-user-columns/:userId", getUserColumnController);
router.patch("/update-column/:columnId", updateColumnController);
router.delete("/delete-column/:columnId", deleteColumnController);

export default router;
