export class LoginPage {


    loginWithCredentials(username, password) {
        cy.get('#loginusername').clear().type(username)
        cy.get('#loginpassword').clear().type(password)
        cy.contains('button', 'Log in').click({ force: true })
        cy.get('#nameofuser', { timeout: 10000 }).should('include.text', 'Welcome')
    }

    loginWithInvalidCredentials(username, password) {
        cy.get('#loginusername').clear().type(username)
        cy.get('#loginpassword').clear().type(password)
        cy.contains('button', 'Log in').click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User does not exist.')
        })
    }

    loginWithPartialData(username) {
        cy.get('#loginusername').clear().type(username)
        cy.contains('button', 'Log in').click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
    }

    loginWIthNoData() {
        cy.contains('button', 'Log in').click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
    }


    closeLoginModalWithX() {
        cy.get('.close').first().click({force: true}).should('not.be.visible')
    
    }

    closeLoginModalWithButton() {
        cy.get('[class="btn btn-secondary"]').eq(1).click({force: true}).should('not.be.visible')
    
    }








}


export const onLoginPage = new LoginPage()