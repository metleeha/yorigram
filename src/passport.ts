import { User } from '@prisma/client';
import { NextFunction, Request } from 'express';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { prisma } from './context';

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload: any, done: any) => {
    try {
        const user = await prisma.user.findUnique({ 
            where: {
                    id: payload.id
                }
        });
        if (user !== null) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false)
    }
};

export const authenticateJwt: any = (
    req: Request, 
    res: Response,
    next: NextFunction
) => passport.authenticate("jwt", { session: false }, (error: any, user: User) => {
        if (error){ return next(error);}
        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);


passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();