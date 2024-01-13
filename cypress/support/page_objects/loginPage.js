import { repoLogin } from "../page_objects/repositories/loginRepository"
export class LoginPage {


    loginWithCredentials(username, password) {
        repoLogin.getUserNameInput().clear().type(username)
        repoLogin.getUserPasswordInput().clear().type(password)
        repoLogin.getLogInButton().click({ force: true })
        repoLogin.getWelcomeText().should('include.text', 'Welcome')
    }

    loginWithInvalidCredentials(username, password) {
        repoLogin.getUserNameInput().clear().type(username)
        repoLogin.getUserPasswordInput().clear().type(password)
        repoLogin.getLogInButton().click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User does not exist.')
        })
    }

    loginWithPartialData(username) {
        repoLogin.getUserNameInput().clear().type(username)
        repoLogin.getLogInButton().click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
    }

    loginWIthNoData() {
        repoLogin.getLogInButton().click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
    }


    closeLoginModalWithX() {
        repoLogin.getLoginCloseX().click({force: true}).should('not.be.visible')
    
    }

    closeLoginModalWithButton() {
        repoLogin.getLoginCloseButton().click({force: true}).should('not.be.visible')
    
    }








}


export const onLoginPage = new LoginPage()