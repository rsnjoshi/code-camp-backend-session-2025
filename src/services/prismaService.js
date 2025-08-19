import { PrismaClient } from "@prisma/client";

export class PrismaService {
  static prismaClient = new PrismaClient();
}
