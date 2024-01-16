import { productDetailRepo } from "./repositories/productDetailRepository"

export class ProductDetail{

   clickOnAddToCart() {
    productDetailRepo.getAddToCartButton().click()
   }




}

export const onProductDetail = new ProductDetail()