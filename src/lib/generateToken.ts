import * as jwt from 'jsonwebtoken';

const secret = <string>process.env.JWT_SECRET 

export const generateToken = (payload: Object): Promise<any> => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secret,
            {expiresIn: '1h'},
            (err: any, token: string | undefined) => {
                if (err) {
                    reject(err)
                } 
                resolve(token)
            }
        )
    })
}