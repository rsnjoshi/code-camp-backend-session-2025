import { PrismaService } from "./prismaService.js";

export class ColumnService {
  prisma;

  constructor() {
    this.prisma = PrismaService.prismaClient;
  }

  async createColumn(userId, data) {
    try {
      const column = await this.prisma.column.create({
        data: {
          ...data,
          userId: userId,
        },
      });
      return column;
    } catch (error) {
      console.log("Something went wrong while creating the column!!", error);
      throw error;
    }
  }

  async getAllColumns() {
    try {
      const columns = await this.prisma.column.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          user: true,
        },
      });
      return columns;
    } catch (error) {
      console.log(
        "Something went wrong while getting all the columns!!",
        error
      );
      throw error;
    }
  }

  async getUserColumns(userId) {
    try {
      const columns = await this.prisma.column.findMany({
        where: {
          userId: userId,
          deletedAt: null,
        },
        include: {
          user: true,
        },
      });
      return columns;
    } catch (error) {
      console.log(
        `Something went wrong while getting all the columns for the user with id ${userId}!!`,
        error
      );
      throw error;
    }
  }

  async getColumnById(id) {
    try {
      const column = await this.prisma.column.findFirst({
        where: {
          deletedAt: null,
          id: id,
        },
      });
      return column;
    } catch (error) {
      console.log(
        `Something went wrong while getting column with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async updateColumn(id, data) {
    try {
      const column = await this.prisma.column.update({
        where: { id: id, deletedAt: null },
        data: {
          ...data,
          updatedAt: new Date(),
        },
      });
      return column;
    } catch (error) {
      console.log(
        `Something went wrong while updating the column with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async deleteColumn(id) {
    try {
      await this.prisma.column.update({
        where: { id: id },
        data: {
          deletedAt: new Date(),
        },
      });
    } catch (error) {
      console.log(
        `Something went wrong while deleting the column with id: ${id}`,
        error
      );
      throw error;
    }
  }
}
