const jwt = require('jsonwebtoken');
const { TokenService } = require('../services');
const tokenService = new TokenService();

async function createToken(payload, secretKey, accessExpireTime, refreshExpireTime, userName = null){
    try {
        const accessToken = jwt.sign(payload, secretKey, {expiresIn: accessExpireTime});
        const refreshToken = jwt.sign(payload, secretKey, {expiresIn: refreshExpireTime});
    
        if (userName){
            await tokenService.addToken(userName, refreshToken);
        }
    
        return {refreshToken, accessToken};
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createToken;