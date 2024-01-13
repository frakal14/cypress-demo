import { onHeaderPage } from "../../support/page_objects/headerPage"
import { onLoginPage } from "../../support/page_objects/loginPage"
import loginData from "../../fixtures/loginData.json"

describe('Validate login page functionality', () => {

    beforeEach( () => {
        cy.openHomePage()
        onHeaderPage.clickOnLogin()
    })

    it('User can login with valid credentials', () => {
        onLoginPage.loginWithCredentials(loginData.username, loginData.password)
    })

    it('User cannot login with invalid credentials', () => {
        onLoginPage.loginWithInvalidCredentials(loginData.invalidUsername, loginData.password)
    })

    it('User cannot logn with partial username or password', () => {
        onLoginPage.loginWithPartialData('test')
    })

    it('User can close login modal with "x" or button', () => {
        onLoginPage.closeLoginModalWithX()
        onLoginPage.closeLoginModalWithButton()
    })

    it('Login form validation trigger with no data', () => {
        onLoginPage.loginWIthNoData()
    })



    


   //  TODO:  Watch global veriables turotial and implement into test suite for user credentials and what else 
   // TODO: Get more info on POM selectors hadling best practises
   







})

