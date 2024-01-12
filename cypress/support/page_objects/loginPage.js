export class LoginPage {

    loginWithValidCredentials(username, password) {
        cy.get('#loginusername').clear().type(username)
        cy.get('#loginpassword').clear().type(password)
        cy.contains('button', 'Log in').click({ force: true })
        cy.get('#nameofuser', { timeout: 10000 }).should('include.text', 'Welcome')
    }

    loginWithPartialData(username) {
        cy.get('#loginusername').clear().type(username)
        cy.contains('button', 'Log in').click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })

    }








}


export const onLoginPage = new LoginPage()