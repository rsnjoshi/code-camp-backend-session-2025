const userGuard = (fieldName) => {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const user = req.user;

    if (user.isAdmin) {
      next();
      return;
    }

    if (user.id !== req.validated.params[fieldName]) {
      res.status(403).json({
        message: "Forbidden!! cannot access others resources!!",
      });
      return;
    }

    next();
    return;
  };
};

export { userGuard };
