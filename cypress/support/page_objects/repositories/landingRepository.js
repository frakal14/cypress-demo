
export class LandingRepository {


    getRightHeroSlider() {
        return cy.get('[class="carousel-control-next"]')

    }

    getLefttHeroSlider() {
        return cy.get('[class="carousel-control-prev"]')

    }




}

export const landingRepo = new LandingRepository()