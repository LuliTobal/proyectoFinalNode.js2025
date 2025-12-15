import { generateToken } from "../data/token.js";

export async function login (req, res) {
    const {email, password} = req.body;
    if (email === 'test@gmail.com' && password === '123456'){
        const user = {email: email, id:'123'}
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    };
};