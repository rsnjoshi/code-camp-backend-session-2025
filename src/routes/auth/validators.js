import { body } from "express-validator";

const registerUserValidator = [
  body("email").isEmail().withMessage("email should be a valid email string!!"),
  body("fullName")
    .notEmpty()
    .isString()
    .withMessage("fullName should be a valid string!!"),
  body("password")
    .notEmpty()
    .isString()
    .withMessage("password should be a valid string"),
  body("isAdmin")
    .isBoolean()
    .withMessage("isAdmin should be a boolean value!!"),
];

const loginUserValidator = [
  body("email").isEmail().withMessage("email should be a valid email string!!"),
  body("password")
    .notEmpty()
    .isString()
    .withMessage("password should be a valid string"),
];

export { registerUserValidator, loginUserValidator };
