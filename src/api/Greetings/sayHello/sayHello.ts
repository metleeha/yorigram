import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
    Query: {
        sayHello: async () => {
            console.log(await prisma.user.findMany());
            return "HELLO"
        }
    }
}