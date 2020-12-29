import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default {
    Mutation: {
        createAccount: async (_:any, args: any) => {
            const { username, email, firstName = "", lastName = "", bio = "" } = args;
            const user = await prisma.user.create({
                data: {
                    username: username,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    bio: bio
                }
            });
            return user;
        }
    }
}