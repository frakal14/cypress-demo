import loginData from "../../fixtures/loginData.json"

describe('Validate checkout process functionality', () => {

    before('Opening homepage', () => {
        cy.login(loginData.username, loginData.password)
        cy.visit('/')
    })

    it('User is able to successfuly place order with one product', () => {
       



    })





})