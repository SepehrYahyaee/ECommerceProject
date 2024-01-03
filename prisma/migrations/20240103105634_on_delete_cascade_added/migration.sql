-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_forUser_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_byUser_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_onProduct_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_byUser_fkey";

-- DropForeignKey
ALTER TABLE "ProductToCart" DROP CONSTRAINT "ProductToCart_cartId_fkey";

-- DropForeignKey
ALTER TABLE "ProductToCart" DROP CONSTRAINT "ProductToCart_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductToOrder" DROP CONSTRAINT "ProductToOrder_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ProductToOrder" DROP CONSTRAINT "ProductToOrder_productId_fkey";

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_forUser_fkey";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_byUser_fkey" FOREIGN KEY ("byUser") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_onProduct_fkey" FOREIGN KEY ("onProduct") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_forUser_fkey" FOREIGN KEY ("forUser") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToCart" ADD CONSTRAINT "ProductToCart_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("cartId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToCart" ADD CONSTRAINT "ProductToCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_byUser_fkey" FOREIGN KEY ("byUser") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToOrder" ADD CONSTRAINT "ProductToOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductToOrder" ADD CONSTRAINT "ProductToOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_forUser_fkey" FOREIGN KEY ("forUser") REFERENCES "User"("userName") ON DELETE CASCADE ON UPDATE CASCADE;
