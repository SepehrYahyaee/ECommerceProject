const { CartService } = require('../services');
const cartService = new CartService();

async function showCart(req, res){
    const cart = await cartService.showCart(req.user.userId);
    res.status(200).send(cart);
}

module.exports = {
    showCart
}