import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdConroller,
  updateUserController,
  deleteUserController,
} from "./controllers/index.js";

import {
  createUserBodyValidator,
  userParamValidator,
  updateUserBodyValidator,
} from "./validators.js";

import { validate } from "../../middlewares/index.js";

const router = express.Router();

router.post(
  "/create-user",
  validate(createUserBodyValidator),
  createUserController
);
router.patch(
  "/update-user/:userId",
  validate(userParamValidator, updateUserBodyValidator),
  updateUserController
);
router.get("/get-all-users", getAllUsersController);
router.get(
  "/get-user/:userId",
  validate(userParamValidator),
  getUserByIdConroller
);
router.delete(
  "/delete-user/:userId",
  validate(userParamValidator),
  deleteUserController
);

export default router;
