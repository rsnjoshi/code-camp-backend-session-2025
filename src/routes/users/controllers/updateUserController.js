import { UserService } from "../../../services/index.js";

const updateUserController = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;

    const userId = params.userId;

    const userService = new UserService();

    const user = await userService.updateUser(userId, body);

    res.status(200).json({
      message: "Successfully updated the user!!",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong while updating the user with user id: ${userId}!!`,
    });
  }
  return;
};

export { updateUserController };
