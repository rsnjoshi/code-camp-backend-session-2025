import { ColumnService } from "../services/index.js";

const columnGuard = (fieldName) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const user = req.user;

      if (user.isAdmin) {
        next();
        return;
      }

      const columnId = req.validated.params[fieldName];
      const columnService = new ColumnService();
      const column = await columnService.getColumnById(columnId);

      if (!column) {
        res.status(404).json({
          message: "Requested column not found!!",
        });
        return;
      }

      if (user.id !== column.userId) {
        res.status(403).json({
          message: "User is not the owner of the column",
        });
        return;
      }

      next();
    } catch (error) {
      console.error("Error occured in ColumnGuard: ", error);
      res.status(500).json({
        message: "Internal Server Error!!",
      });
    }
    return;
  };
};

export { columnGuard };
