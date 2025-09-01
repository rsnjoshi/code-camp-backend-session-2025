import { AuthService, UserService } from "./../../../services/index.js";

const registerUserController = async (req, res) => {
  try {
    const body = req.validated.body;
    const userService = new UserService();
    const authService = new AuthService();

    const hashedPassword = await authService.generatePasswordHash(
      body.password
    );

    const finalBody = {
      email: body.email,
      fullName: body.fullName,
      password: hashedPassword,
      isAdmin: body.isAdmin,
    };

    const user = await userService.createUser(finalBody);

    res.status(201).json({
      message: "User registered!!",
      data: {
        userId: user.id,
        email: user.email,
        fullName: user.fullName,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Somsething went wrong while registering the user!!",
    });
  }
  return;
};

export { registerUserController };
