
export class LandingRepository {


    getRightHeroSlider() {
        return cy.get('[class="carousel-control-next"]')

    }

    getLefttHeroSlider() {
        return cy.get('[class="carousel-control-prev"]')

    }

    getPhonesCategory() {
        return cy.get('[class="list-group-item"]').eq(0)
    }

    getLaptopsCategory() {
        return cy.get('[class="list-group-item"]').eq(1)
    }

    getMonitorsCategory() {
        return cy.get('[class="list-group-item"]').last()
    }

    getCategoriesFirstItem() {
        return cy.get('#tbodyid').first()
    }

    getNextCategoriesPagonationButton() {
        return cy.get('#next2')
    }

    getPrevCategoriesPagonationButton() {
        return cy.get('#prev2')
    }

    
    




}

export const landingRepo = new LandingRepository()