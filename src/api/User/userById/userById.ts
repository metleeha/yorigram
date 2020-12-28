import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default {
    Query: {
        userById: (_: any, args: any) => {
                return prisma.user.findUnique(args);
        }
    }
}