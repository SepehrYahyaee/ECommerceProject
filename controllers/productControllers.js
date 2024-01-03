const { ProductService } = require('../services');
const productService = new ProductService();

async function createProduct(req, res){
    const productDetails = {...req.body}; //TODO: validation (productName + price + count ejbarie)
    const createdProduct = await productService.createProduct(productDetails);
    res.status(201).send(createdProduct);
}

async function productList(req, res){
    const { page, count } = req.query; //TODO: validation - faqat page o count ghabule
    const products = await productService.retrieveProductsWithPagination(page, count);
    res.status(200).send(products);
}

async function productDetails(req, res){
    const { productId } = req.params;
    const product = await productService.getProductById(productId);
    res.status(200).send(product);
}

async function updateProduct(req, res){
    const fieldsforUpdate = {...req.body}; //TODO: validation + chizai ke mitune update beshe !
    const updatedProduct = await productService.updateProductById(req.params.productId, fieldsforUpdate);
    res.status(201).send(`updateProduct: ${JSON.stringify(updatedProduct)}`);
}

async function deleteProduct(req, res){
    await productService.deleteProductById(req.params.id);
    res.status(204).send('Successfully Deleted!');
}

module.exports = {
    createProduct,
    productList,
    productDetails,
    updateProduct,
    deleteProduct
}