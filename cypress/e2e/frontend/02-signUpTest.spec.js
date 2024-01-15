import { onHeaderPage } from "../../support/page_objects/headerPage"
import {onSignUpPage } from "../../support/page_objects/signUpPage"
import signUpData from "../../fixtures/signUpData.json"
import { faker } from '@faker-js/faker'



describe('Validate sign up form functionality', () => {

    beforeEach('Open the landing page and click on Sign Up button', () => {
        cy.openHomePage()
        onHeaderPage.clickOnSignUp()
    })

    it('User is able to sign up with valid data', () => {
        onSignUpPage.signUpWithCredentials(faker.person.firstName(), signUpData.password)
    })

    it('User is not able to sign up with empty form', () => {
        onSignUpPage.signUpWithNoCredentials()
    })

    







})