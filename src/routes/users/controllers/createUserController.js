import { UserService } from "./../../../services/index.js";

const createUserController = async (req, res) => {
  try {
    const body = req.validated.body;
    const userService = new UserService();

    const user = await userService.createUser(body);

    res.status(201).json({
      message: "User created!!",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Somsething went wrong while creating the user!!",
    });
  }
  return;
};

export { createUserController };
