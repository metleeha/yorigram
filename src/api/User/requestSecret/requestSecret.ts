import { generateSecret } from '../../../utils';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default {
    Mutation: {
        requestSecret: async (_:any, args:any) => {
            const { email } = args;
            const loginSecret = generateSecret();
            try {
                await prisma.user.update({
                    data: { loginSecret },
                    where: { email }
                });
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
}
