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

    clickOnLandingPageCategories() {

        landingRepo.getPhonesCategory().click()
        landingRepo.getCategoriesFirstItem().should('contain','Samsung galaxy s6')
        
        landingRepo.getLaptopsCategory().click()
        landingRepo.getCategoriesFirstItem().should('contain','Sony vaio i5') 
        
        landingRepo.getMonitorsCategory().click()
        cy.get('#tbodyid').should('contain','Apple monitor 24') 
    }







}

export const onlandingPage = new LandingPage()