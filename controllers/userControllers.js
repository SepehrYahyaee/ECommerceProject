const bc = require('bcrypt');
const { UserService } = require('../services');
const { createToken, hashPassword } = require('../utilities');
const userService = new UserService();

async function register(req, res){ // createUser Sabeq
    const hashedPassword = await hashPassword(req.body.password);
    const createdUser = await userService.createUser(req.body.userName, hashedPassword);
    res.status(201).send(createdUser);
}

async function login(req, res){
    const user = await userService.getUserByUserName(req.body.userName);
    if (!user) throw new Error('username or password does not match!');
    const verify = await bc.compare(req.body.password, user.password);
    if (!verify) throw new Error('username or password does not match!');
    const tokens = await createToken({userName: req.body.userName}, process.env.SECRET_KEY, process.env.ACCESS_EXPIRE_TIME, 
        process.env.REFRESH_EXPIRE_TIME, req.body.userName);
    res.status(200).send(tokens);
}

async function retrieveAllUsers(req, res){
    const allUsers = await userService.getAllUsers();
    res.status(200).send(allUsers);
}

async function retrieveSpecificUser(req, res){
    const user = await userService.getUserById(req.params.id);
    res.status(200).send(user);
}

async function updateUser(req, res){
    const fieldsforUpdate = {...req.body}; //TODO: validation + userName o password age update beshe -> dobare login
    const updatedUser = await userService.updateUserById(req.user.userId, fieldsforUpdate);
    res.status(201).send(`updateUser: ${JSON.stringify(updatedUser)}`);
}

async function deleteUser(req, res){
    await userService.deleteUserById(req.user.userId);
    res.status(204);
}

module.exports = {
    register,
    login,
    retrieveAllUsers,
    retrieveSpecificUser,
    updateUser,
    deleteUser
}