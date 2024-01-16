import loginData from "../../fixtures/loginData.json"
import { onCartPage } from "../../support/page_objects/cartPage"
import { onHeaderPage } from "../../support/page_objects/headerPage"
import { onLandingPage } from "../../support/page_objects/landingPage."

describe('Validate checkout process functionality', () => {

    before('Opening homepage', () => {
        cy.login(loginData.username, loginData.password)
        cy.visit('/')
    })

    it('User is able to successfuly place order with one product', () => {
       onLandingPage.addSingleProductToCart()
       onHeaderPage.clickOnCart()
       onCartPage.clickOnPlaceOrder()
       onCartPage.fillOutOrderForm('Karol', 'Germany', 'Berlin', '1111', 'January', '2024')



    })





})