import { PrismaService } from "./prismaService.js";

export class UserService {
  prisma;

  constructor() {
    this.prisma = PrismaService.prismaClient;
  }

  async createUser(data) {
    try {
      const user = await this.prisma.user.create({
        data,
      });
      return user;
    } catch (error) {
      console.log("Something went wrong while creating the user!!", error);
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany({
        where: {
          deletedAt: null,
        },
      });
      return users;
    } catch (error) {
      console.log("Something went wrong while getting all the users!!", error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          deletedAt: null,
          id: id,
        },
      });
      return user;
    } catch (error) {
      console.log(
        `Something went wrong while getting user with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async updateUser(id, data) {
    try {
      const user = await this.prisma.user.update({
        where: { id: id, deletedAt: null },
        data: {
          ...data,
          updatedAt: new Date(),
        },
      });
      return user;
    } catch (error) {
      console.log(
        `Something went wrong while updating the user with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      await this.prisma.user.update({
        where: { id: id },
        data: {
          deletedAt: new Date(),
        },
      });
    } catch (error) {
      console.log(
        `Something went wrong while deleting the user with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: email,
          deletedAt: null,
        },
      });
      return user;
    } catch (error) {
      console.log(
        `Something went wrong while getting the user with email: ${email}`,
        error
      );
      throw error;
    }
  }
}
