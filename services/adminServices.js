const prisma = require('../db.js');

class AdminService {
    db = prisma;

    async getAllUsers(){
        return await this.db.user.findMany({});
    }
}

module.exports = AdminService;