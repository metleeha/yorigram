import { generateSecret, sendSecretMail } from '../../../utils';
import { prisma } from '../../../context';

export default {
    Mutation: {
        requestSecret: async (_:any, args:any) => {
            const { email } = args;
            const loginSecret = generateSecret();
            try {
                await sendSecretMail(email, loginSecret);
                await prisma.user.update({
                    data: { loginSecret: loginSecret },
                    where: { email: email }
                });
                return true;
            } catch {
                return false;
            }
        }
    }
}
