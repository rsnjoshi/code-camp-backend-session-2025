import { UserService } from "../../../services/index.js";

const deleteUserController = async (req, res) => {
  try {
    const params = req.validated.params;

    const userId = params.userId;

    const userService = new UserService();
    await userService.deleteUser(userId);

    res.status(200).json({
      message: `Successfully deleted the user with user id: ${userId}!!`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong while deleting the user with user id: ${userId}!!`,
    });
  }
  return;
};

export { deleteUserController };
