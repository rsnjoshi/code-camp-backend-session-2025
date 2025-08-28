import { body, param } from "express-validator";

const userParamValidator = [
  param("userId")
    .notEmpty()
    .isUUID()
    .withMessage(
      "userId should be provided as a param :userId and must be a uuid!!"
    ),
];

const createUserBodyValidator = [
  body("email").isEmail().withMessage("email should be a valid email string!!"),
  body("fullName")
    .notEmpty()
    .isString()
    .withMessage("fullName should be a valid string!!"),
  body("password")
    .notEmpty()
    .isString()
    .withMessage("password should be a valid string"),
];

const updateUserBodyValidator = [
  body("email")
    .optional()
    .isEmail()
    .withMessage("Email should be a valid email!!"),
  body("fullName")
    .optional()
    .isString()
    .withMessage("fullName should be a valid string!!"),
  body("password")
    .optional()
    .isString()
    .withMessage("password should be a valid string"),
];

export { createUserBodyValidator, userParamValidator, updateUserBodyValidator };
