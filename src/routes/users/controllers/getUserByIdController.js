import { UserService } from "../../../services/index.js";

const getUserByIdConroller = async (req, res) => {
  try {
    const params = req.validated.params;
    const userId = params.userId;

    const userService = new UserService();

    const user = await userService.getUserById(userId);

    if (!user) {
      res.status(404).json({
        message: "User not found!!",
      });
      return;
    }

    res.status(200).json({
      message: "Successfully fetched the user!!",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching all the users!!",
    });
  }
  return;
};

export { getUserByIdConroller };
