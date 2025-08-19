import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdConroller,
  updateUserController,
  deleteUserController,
} from "./controllers/index.js";

const router = express.Router();

router.post("/create-user", createUserController);
router.get("/get-all-users", getAllUsersController);
router.get("/get-user/:userId", getUserByIdConroller);
router.patch("/update-user/:userId", updateUserController);
router.delete("/delete-user/:userId", deleteUserController);

export default router;
