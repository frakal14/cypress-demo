import {repoSignUp} from "../page_objects/repositories/signUpRepository"

export class SignUpPage{

    signUpWithCredentials(username, password) {
        repoSignUp.getUsernameInput().clear().type(username)
        repoSignUp.getPasswordInput().clear().type(password)
        repoSignUp.getSignUpButton().click({ force: true })
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.')
        })
    }





}

export const onSignUpPage = new SignUpPage()