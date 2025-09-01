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

import {
  adminGuard,
  userGuard,
  tokenValidator,
  validate,
} from "../../middlewares/index.js";

const router = express.Router();

router.post(
  "/create-user",
  validate(createUserBodyValidator),
  adminGuard(),
  createUserController
);
router.patch(
  "/update-user/:userId",
  validate(userParamValidator, updateUserBodyValidator),
  userGuard("userId"),
  updateUserController
);
router.get(
  "/get-all-users",
  tokenValidator(),
  adminGuard(),
  getAllUsersController
);
router.get(
  "/get-user/:userId",
  validate(userParamValidator),
  userGuard("userId"),
  getUserByIdConroller
);
router.delete(
  "/delete-user/:userId",
  validate(userParamValidator),
  adminGuard(),
  deleteUserController
);

export default router;
