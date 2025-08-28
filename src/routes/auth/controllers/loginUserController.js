import { UserService, AuthService } from "../../../services/index.js";

const loginUserController = async (req, res) => {
  try {
    const body = req.validated.body;

    const email = body.email;
    const password = body.password;

    const userService = new UserService();
    const authService = new AuthService();

    const user = await userService.getUserByEmail(email);

    if (!user) {
      res.status(404).json({
        message: "User not found!!",
      });
      return;
    }

    const hashedPassword = user.password;

    const isValid = await authService.verifyPasswordHash(
      password,
      hashedPassword
    );

    if (!isValid) {
      res.status(409).json({
        message: "Either username or password is invalid!!",
      });
      return;
    }

    const token = authService.generateAccessToken(user.id);

    res.status(200).json({
      message: "Successfully logged in the user!!",
      data: {
        accessToken: token,
        userId: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Somsething went wrong while logging in the user!!",
    });
  }
  return;
};

export { loginUserController };
