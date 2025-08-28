import { body, param } from "express-validator";

const columnIdParamValidator = [
  param("columnId").isUUID().withMessage("columnId should be a valid UUID"),
];

const userIdParamValidator = [
  param("userId").isUUID().withMessage("userId should be a valid UUID"),
];

const createColumnBodyValidator = [
  body("title")
    .notEmpty()
    .isString()
    .withMessage("title should be a valid string"),
];

const updateColumnBodyValidator = [
  body("title")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("title should be a valid string"),
];

export {
  columnIdParamValidator,
  userIdParamValidator,
  createColumnBodyValidator,
  updateColumnBodyValidator,
};
