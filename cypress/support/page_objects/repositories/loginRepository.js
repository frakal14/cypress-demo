
export class LoginRepository{

    getUserNameInput() {
        return cy.get('#loginusername')
    }

    getUserPasswordInput() {
        return cy.get('#loginpassword')
    }

    getLogInButton() {
        return cy.contains('button', 'Log in')
    }

    getWelcomeText() {
        return cy.get('#nameofuser', { timeout: 10000 })
    }

    getLoginCloseX() {
        return cy.get('.close').first()
    }

    getLoginCloseButton() {
        return cy.get('[class="btn btn-secondary"]').eq(1)
    }






}



export const repoLogin = new LoginRepository()