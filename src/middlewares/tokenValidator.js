import { AuthService, UserService } from "../services/index.js";

const tokenValidator = () => {
  return async (req, res, next) => {
    try {
      const auth_header = req.headers["authorization"];

      if (!auth_header) {
        res.status(401).json({
          message:
            "Empty token!! Please include the token in the request header",
        });
        return;
      }

      const token = auth_header.split(" ")[1];

      if (!token) {
        res.status(401).json({
          message:
            "Invalid Token format!! Please include the token in the request header like this => Bearer <token>!!",
        });
        return;
      }

      const authService = new AuthService();
      const payload = await authService.verifyAccessToken(token);

      if (!payload.userId) {
        res.status(401).json({
          message: "Invalid Token!!",
        });
        return;
      }

      const userId = payload.userId;

      const userService = new UserService();
      const user = await userService.getUserById(userId);

      if (!user) {
        res.status(401).json({
          message: "Owner of the token not found",
        });
        return;
      }

      req.user = user;

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Invalid token" });
    }
    return;
  };
};

export { tokenValidator };
