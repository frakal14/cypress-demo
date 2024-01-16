
import { cartRepo } from "./repositories/cartRepository"

export class CartPage {

    clickOnPlaceOrder() {
        cartRepo.getPlaceOrderButton().click()
    }

    fillOutOrderForm(name, country, city, creditCard, month, year) {
        cartRepo.getOrderForm()
        cartRepo.getOrderFormName().clear().type(name)
        cartRepo.getOrderFormCountry().clear().type(country)
        cartRepo.getOrderFormCity().clear().type(city)
        cartRepo.getOrderFormCreditCart().clear().type(creditCard)
        cartRepo.getOrderFormMonth().clear().type(month)
        cartRepo.getOrderFormYear().clear().type(year)
        cartRepo.getOrderFormPurchaseButton().focus().click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Thank you for your purchase!')
        })
    }

}



export const onCartPage = new CartPage()