const { onLandingPage } = require("../../support/page_objects/landingPage.")

describe('Validate landing page functionality and elements', () => {

    beforeEach('Opening homepage', () => {
        cy.openHomePage()
    })


    it('User is able to slide the hero banned left or right', () => {
        onLandingPage.clickOnLeftHeroBannerSlider()
        onLandingPage.clickOnRightHeroBannerSlider()

    })

    it('User is able to navigate through landing page categories', () => {
        onLandingPage.clickOnLandingPageCategories()
    })

    it('User is able to use categories page pagination', () => {
        onLandingPage.clickOnCategoriesPaginationButtons()

    })


})