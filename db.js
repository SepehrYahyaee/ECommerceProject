const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// const prisma = new PrismaClient().$extends({
//   result: {
//     cart: {
//       totalPrice: {
//         needs: { cartId: true },
//         async compute(cart) {
//           const products = await prisma.productToCart.findMany({
//             where: { cartId: cart.cartId },
//             select: { count: true, product: { select: { price: true } } },
//           })
//           const totalPrice = products.reduce(
//             (total, { product, count }) => total + parseInt(product.price) * count,
//             0
//           )
//           return totalPrice;
//         },
//       },
//     },
//   },
// })

// async function main() {
//   const cart = await prisma.cart.findFirst({});
//   console.log(await cart.totalPrice);
// }

// main()

module.exports = prisma;