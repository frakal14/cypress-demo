export class LoginPage{

    loginWithValidCredentials(username, password) {
        cy.get('#login2').click()
        cy.get('#loginusername').clear().type(username)
        cy.get('#loginpassword').clear().type(password)
        cy.contains('button','Log in').click({force: true})
        cy.get('#nameofuser', {timeout: 10000}).should('include.text', 'Welcome')
    }








}


export const onLoginPage = new LoginPage()