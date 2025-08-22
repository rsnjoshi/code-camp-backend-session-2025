import { validationResult, matchedData } from "express-validator";

const validate = (...validationGroups) => {
  return async (req, res, next) => {
    const validations = validationGroups.flat();

    for (let validation of validations) {
      await validation.run(req);
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: "validation failed",
        errors: errors.array(),
      });
      return;
    }

    req.validated = {
      body: matchedData(req, { locations: ["body"] }),
      params: matchedData(req, { locations: ["params"] }),
      query: matchedData(req, { locations: ["query"] }),
    };

    next();
  };
};

export { validate };
