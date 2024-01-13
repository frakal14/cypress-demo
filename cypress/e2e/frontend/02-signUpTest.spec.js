import { onHeaderPage } from "../../support/page_objects/headerPage"
import {onSignUpPage } from "../../support/page_objects/signUpPage"


describe('Validate sign up form functionality', () => {

    beforeEach( () => {
        cy.openHomePage()
        onHeaderPage.clickOnSignUp()
    })

    it('User is able to sign up with valid data', () => {
        onSignUpPage.signUpWithCredentials('tyhyrthtyhtyhtyh', 'Password123!')



    })

    







})