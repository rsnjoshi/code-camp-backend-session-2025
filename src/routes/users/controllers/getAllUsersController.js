import { UserService } from "./../../../services/index.js";

const getAllUsersController = async (req, res) => {
  try {
    const userService = new UserService();

    const users = await userService.getAllUsers();

    res.status(200).json({
      message: "Successfully fetched all the users!!",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the users!!",
    });
  }
  return;
};

export { getAllUsersController };
