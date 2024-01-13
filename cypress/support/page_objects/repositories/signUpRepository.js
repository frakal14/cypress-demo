
export class SignUpRepository{

    getUsernameInput() {
        return cy.get('#sign-username')
    }

    getPasswordInput() {
        return cy.get('#sign-password')
    }

    getSignUpButton() {
        return cy.contains('button', 'Sign up')
    }

    getSignUpCloseButton() {
        return cy.get('[class="btn btn-secondary"]').eq(1)
    }






}



export const repoSignUp = new SignUpRepository()
