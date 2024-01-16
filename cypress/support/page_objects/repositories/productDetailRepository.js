export class ProductDetailRepository{

    getAddToCartButton() {
        return cy.contains('Add to cart')
    }




}

export const productDetailRepo = new ProductDetailRepository()