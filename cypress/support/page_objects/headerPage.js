export class HeaderPage{

    clickOnLogin() {
        cy.get('#login2').click()
    }

    clickOnSignUp() {
        cy.get('#signin2').click()
    }

    clickOnCart() {
        cy.get('#cartur').click()
    }




    

}

export const onHeaderPage = new HeaderPage()