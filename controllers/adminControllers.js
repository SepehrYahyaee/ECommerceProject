const { AdminService } = require('../services');
const adminService = new AdminService();

async function allUsers(req, res){
    const allUsers = await adminService.getAllUsers();
    res.status(200).send(allUsers);
}

module.exports = {
    allUsers,
    
}