import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv()

const secret_key =  process.env.JWT_SECRET_KEY;

export const auth = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, secret_key, (err) =>{
        if (err) return res.sendStatus(403);
        next();
    });
};
