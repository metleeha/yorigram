import { prisma } from '../../../context';

export default {
    Mutation: {
        createAccount: async (_:any, args: any) => {
            const { username, email, firstName = "", lastName = "", bio = "" } = args;
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    firstName,
                    lastName,
                    bio
                }
            });
            return user;
        }
    }
}