import { onHeaderPage } from "../../support/page_objects/headerPage"
import { onLoginPage } from "../../support/page_objects/loginPage"

describe('Validate login page functionality', () => {

    beforeEach( () => {
        cy.openHomePage()
    })

    it('User can login with valid credentials', () => {
        onHeaderPage.clickOnLogin()
        onLoginPage.loginWithValidCredentials('frakal', 'Password123!')
    })






})

