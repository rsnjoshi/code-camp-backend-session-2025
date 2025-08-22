import { PrismaService } from "./prismaService.js";

export class TaskService {
  prisma;

  constructor() {
    this.prisma = PrismaService.prismaClient;
  }

  async createTask(columnId, data) {
    try {
      const task = await this.prisma.task.create({
        data: {
          ...data,
          columnId: columnId,
        },
      });
      return task;
    } catch (error) {
      console.log("Something went wrong while creating the task!!", error);
      throw error;
    }
  }

  async getAllTasks() {
    try {
      const tasks = await this.prisma.task.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          column: true,
        },
      });
      return tasks;
    } catch (error) {
      console.log("Something went wrong while getting all the tasks!!", error);
      throw error;
    }
  }

  async getColumnTasks(columnId) {
    try {
      const tasks = await this.prisma.task.findMany({
        where: {
          columnId: columnId,
          deletedAt: null,
        },
        include: {
          column: true,
        },
      });
      return tasks;
    } catch (error) {
      console.log(
        `Something went wrong while getting all the tasks for the column with id ${columnId}!!`,
        error
      );
      throw error;
    }
  }

  async getTaskById(id) {
    try {
      const task = await this.prisma.task.findFirst({
        where: {
          deletedAt: null,
          id: id,
        },
      });
      return task;
    } catch (error) {
      console.log(
        `Something went wrong while getting task with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async updateTask(id, data) {
    try {
      const task = await this.prisma.task.update({
        where: { id: id, deletedAt: null },
        data: {
          ...data,
          updatedAt: new Date(),
        },
      });
      return task;
    } catch (error) {
      console.log(
        `Something went wrong while updating the task with id: ${id}`,
        error
      );
      throw error;
    }
  }

  async deleteTask(id) {
    try {
      await this.prisma.task.update({
        where: { id: id },
        data: {
          deletedAt: new Date(),
        },
      });
    } catch (error) {
      console.log(
        `Something went wrong while deleting the task with id: ${id}`,
        error
      );
      throw error;
    }
  }
}
