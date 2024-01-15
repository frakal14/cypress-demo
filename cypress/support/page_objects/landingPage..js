import { landingRepo } from "./repositories/landingRepository"

export class LandingPage {

    clickOnLeftHeroBannerSlider() {
        landingRepo.getLefttHeroSlider().click({ force: true})
        cy.get('[class="carousel-item active"]', { timeout: 10000 }).should('be.visible')
    }

    clickOnRightHeroBannerSlider() {
        landingRepo.getRightHeroSlider().click({ force: true })
        cy.get('[class="carousel-item active"]', { timeout: 10000 }).should('be.visible')

    }







}

export const onlandingPage = new LandingPage()