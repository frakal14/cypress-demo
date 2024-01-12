export class HeaderPage{

    clickOnLogin() {
        cy.get('#login2').click()
    }




    

}

export const onHeaderPage = new HeaderPage()