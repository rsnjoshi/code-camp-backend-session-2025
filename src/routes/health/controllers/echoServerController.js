export const echoServerController = (req, res) => {
  const body = req.body;

  res.status(200).json({
    status: "Ok",
    message: "Message Received :) !!",
    data: body,
  });
  return;
};
