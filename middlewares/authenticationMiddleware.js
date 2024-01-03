const jwt = require('jsonwebtoken');
const { UserService } = require('../services');
const userService = new UserService();

async function authentication(req, res, next){
    try {
        const { authorization } = req.headers;
        if (!authorization) throw new Error('token is needed in header for authentication!');
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        if (payload){
            req.user = await userService.getUserByUserName(payload.userName);
        }
        next();
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = authentication;