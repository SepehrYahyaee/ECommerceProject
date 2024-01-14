const { CartService, ProductService } = require('../services');
const cartService = new CartService();
const productService = new ProductService();

async function showCart(req, res){
    const cart = await cartService.showCart(req.user.userId);
    res.status(200).send(cart);
}

async function addToCart(req, res){
    const cart = await cartService.getCartByUserId(req.user.userId);
    const product = await productService.getProductById(req.params.productId);
    if (+product.count === 0) throw new Error('out of stock!');
    await cartService.addtoCart(cart.cartId, req.params.productId);
    res.status(200).send('product added to user\'s cart successfully!');
}

async function updateProductInCart(req, res){
    const fieldsForUpdate = req.body;
    const cart = await cartService.getCartByUserId(req.user.userId);
    const updatedItemInCart = await cartService.updateCart(cart.cartId, req.body.productId, req.body.count);
    res.status(201).send(updatedItemInCart);
}

async function deleteProductInCart(req, res){
    const cart = await cartService.getCartByUserId(req.user.userId);
    await cartService.deleteItemInCart(cart.cartId, req.body.productId);
    res.status(204).send('successfully deleted!');
}

module.exports = {
    showCart,
    addToCart,
    updateProductInCart,
    deleteProductInCart
}