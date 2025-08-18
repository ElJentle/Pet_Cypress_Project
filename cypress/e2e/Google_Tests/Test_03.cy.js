import googlePage from '../../support/pages/pageObject/google-page'

describe('Verify search result on image page are displayed', () => {

    before(() => {
        cy.visit('https://www.google.com')
    })

    it.skip('Verify search result on image page are displayed', () => {
        googlePage.validateGoogleHomePage()
        googlePage.performSearch()
        googlePage.verifyResultsPage()
        googlePage.navigateImageResultsPage()
        cy.wait(2000)
        googlePage.verifyImageResults()
    })

    after(() => {
    })

})