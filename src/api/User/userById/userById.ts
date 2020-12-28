import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default {
    Query: {
        userById: async (_: any, args: any) => {
                const { id } = args;
                return await prisma.user.findUnique({
                    where: {
                        id: Number(id)
                    }
                })
        }
    }
}