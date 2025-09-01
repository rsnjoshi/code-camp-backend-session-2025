const adminGuard = () => {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const user = req.user;

    if (user.isAdmin !== true) {
      res.status(403).json({
        message: "Unauthorized request!!",
      });
      return;
    }

    next();
    return;
  };
};

export { adminGuard };
