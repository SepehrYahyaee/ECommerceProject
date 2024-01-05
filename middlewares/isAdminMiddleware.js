async function isAdmin(req, res, next){
    try {
        if (req.user.role === 'User') {
            throw new Error('not Authorized - nor admin nor owner!');
        } else {
            next();
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = isAdmin;