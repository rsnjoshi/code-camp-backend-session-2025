export const healthCheckController = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy!!",
    timestamp: new Date().toISOString(),
  });
  return;
};
