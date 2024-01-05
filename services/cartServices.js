const prisma = require('../db.js');

class CartService {
    db = prisma;

    async createCart(userId){
        return await this.db.cart.create({data: {forUser: userId}});
    }

    async getCartByUserId(userId){
        return await this.db.cart.findUnique({where: {forUser: userId}});
    }
}

module.exports = CartService;