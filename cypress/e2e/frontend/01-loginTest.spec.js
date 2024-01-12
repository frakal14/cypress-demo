import { onHeaderPage } from "../../support/page_objects/headerPage"
import { onLoginPage } from "../../support/page_objects/loginPage"

describe('Validate login page functionality', () => {

    beforeEach( () => {
        cy.openHomePage()
        onHeaderPage.clickOnLogin()
    })

    it('User can login with valid credentials', () => {
        onLoginPage.loginWithValidCredentials('frakal', 'Password123!')
    })

    it('User cannot logn with partial username or password', () => {
        onLoginPage.loginWithPartialData('test')
    })

    






})

