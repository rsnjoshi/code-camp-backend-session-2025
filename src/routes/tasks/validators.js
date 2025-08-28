import { body, param } from "express-validator";

const taskIdParamValidator = [
  param("taskId").isUUID().withMessage("taskId should be a valid UUID"),
];

const columnIdParamValidator = [
  param("columnId").isUUID().withMessage("columnId should be a valid UUID"),
];

const createTaskBodyValidator = [
  body("title")
    .notEmpty()
    .isString()
    .withMessage("title should be a valid string"),
  body("description")
    .optional()
    .isString()
    .withMessage("description should be a valid string"),
  body("priority")
    .optional()
    .isString()
    .isIn(["LOW", "MEDIUM", "HIGH", "URGENT"])
    .withMessage(
      "priority should be one of the following values: LOW, MEDIUM, HIGH, URGENT"
    ),
];

const updateTaskBodyValidator = [
  body("title")
    .optional()
    .isString()
    .withMessage("title should be a valid string"),
  body("description")
    .optional()
    .isString()
    .withMessage("description should be a valid string"),
  body("priority")
    .optional()
    .isString()
    .isIn(["LOW", "MEDIUM", "HIGH", "URGENT"])
    .withMessage(
      "priority should be one of the following values: LOW, MEDIUM, HIGH, URGENT"
    ),
];

export {
  taskIdParamValidator,
  columnIdParamValidator,
  createTaskBodyValidator,
  updateTaskBodyValidator,
};
