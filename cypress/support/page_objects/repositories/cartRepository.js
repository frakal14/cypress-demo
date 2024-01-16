export class CartRepository{

    getPlaceOrderButton() {
        return cy.contains('Place Order')
    }

    getOrderForm() {
        //return cy.get('[class="form-group"]').eq(0)
        return cy.get('.modal-dialog').should('be.visible').eq(0)
    }

    getOrderFormName() {
        return cy.get('#name').eq(0)
    }

    getOrderFormCountry() {
        return cy.get('#country')
    }

    getOrderFormCity() {
        return cy.get('#city')
    }

    getOrderFormCreditCart() {
        return cy.get('#card')
    }

    getOrderFormMonth() {
        return cy.get('#month')
    }

    getOrderFormYear() {
        return cy.get('#year')
    }

    getOrderFormPurchaseButton() {
        return cy.contains('Purchase')
    }




}

export const cartRepo = new CartRepository()