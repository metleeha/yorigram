import { prisma } from '../../../context';
import { generateToken } from '../../../lib/generateToken';

export default {
    Mutation: {
        confirmSecret: async (_:any, args:any) => {
            const { email, secret } = args;
            const user = await prisma.user.findUnique({ 
                where:{
                    email
                }
            });
            if (user?.loginSecret === secret) {
                const payload = { uid: user?.id };
                return generateToken(payload);
            } else {
                throw Error("Wrong email/secret combination")
            }
        }
    }
}