import { landingRepo } from "./repositories/landingRepository"

export class LandingPage {

    clickOnLeftHeroBannerSlider() {
        landingRepo.getLefttHeroSlider().click({ force: true })
        cy.get('[class="carousel-item active"]', { timeout: 10000 }).should('be.visible')
    }

    clickOnRightHeroBannerSlider() {
        landingRepo.getRightHeroSlider().click({ force: true })
        cy.get('[class="carousel-item active"]', { timeout: 10000 }).should('be.visible')

    }

    clickOnLandingPageCategories() {

        landingRepo.getPhonesCategory().click()
        landingRepo.getCategoriesFirstItem().should('contain', 'Samsung galaxy s6')

        landingRepo.getLaptopsCategory().click()
        landingRepo.getCategoriesFirstItem().should('contain', 'Sony vaio i5')

        landingRepo.getMonitorsCategory().click()
        cy.get('#tbodyid').should('contain', 'Apple monitor 24')
    }

    clickOnCategoriesPaginationButtons() {

        landingRepo.getNextCategoriesPagonationButton().trigger('mouseover').wait(1000).click({ force: true });
        cy.get('[style="display: none;"]').should('exist')

        landingRepo.getPrevCategoriesPagonationButton().click().click({ force: true })
        cy.get('[style="display: block;"]').should('exist')



    }







}

export const onlandingPage = new LandingPage()