const { onlandingPage } = require("../../support/page_objects/landingPage.")

describe('Validate landing page functionality and elements', () => {

    beforeEach('Opening homepage', () => {
        cy.openHomePage()
    })


    it('User is able to slide the hero banned left or right', () => {
        onlandingPage.clickOnLeftHeroBannerSlider()
        onlandingPage.clickOnRightHeroBannerSlider()

    })





})