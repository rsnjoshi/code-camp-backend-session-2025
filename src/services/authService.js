import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AuthService {
  jwt_secret = "code_camp_2025_secret_123";

  jwt_expires_in = "15m";

  generateAccessToken = (userId) => {
    try {
      const token = jwt.sign(
        {
          userId: userId,
        },
        this.jwt_secret,
        {
          expiresIn: this.jwt_expires_in,
        }
      );
      return token;
    } catch (error) {
      console.log("Error while generating token!!", error);
      throw error;
    }
  };

  verifyAccessToken = async (token) => {
    try {
      const verificationPromise = new Promise((resolve, reject) => {
        jwt.verify(token, this.jwt_secret, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
      const data = await verificationPromise;
      return data;
    } catch (error) {
      console.log("Error while verifying the token!!", error);
      throw error;
    }
  };

  generatePasswordHash = async (password) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      return hashedPassword;
    } catch (error) {
      console.log("Error while hashing the password!!", error);
      throw error;
    }
  };

  verifyPasswordHash = async (password, hashedPassword) => {
    try {
      const isValidPassword = await bcrypt.compare(password, hashedPassword);
      return isValidPassword;
    } catch (error) {
      console.log("Error while verifying hashed password!!", error);
      throw error;
    }
  };
}

export { AuthService };
