async function isAdmin(req, res, next){
    try {
        if (req.user.role !==  'Admin' || req.user.role !== 'Owner') {
            throw new Error('not Authorized - nor admin nor owner!');
        }
        next();
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = isAdmin;