const prisma = require('../db.js');

class CartService {
    db = prisma;

    async createCart(userId){
        return await this.db.cart.create({data: {forUser: userId}});
    }

    async getCartByUserId(userId){
        return await this.db.cart.findUnique({where: {forUser: userId}});
    }

    async addtoCart(cartId, productId){
        return await this.db.productToCart.create({
            data: {
                cartId,
                productId,
                count: 1
            }
        })
    }

    async showCart(userId){
        const cartForUser = await this.getCartByUserId(userId);
        return await this.db.productToCart.findMany({
            where: {
                cartId: cartForUser.cartId,
            },
            include: {
                product: {
                    select: {
                        productName: true
                    }
                }
            }
        })
    }

    async updateCart(cartId, productId, count){
        return await this.db.productToCart.update({
            where: {
                cartId,
                productId
            },
            data: {
                count: +count + (count)
            }
        })
    }

    async deleteItemInCart(cartId, productId){
        return await this.db.productToCart.delete({where: {cartId, productId}});
    }
}

module.exports = CartService;