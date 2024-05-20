import googlePage from '../../support/pages/pageObject/google-page'

describe('Verify search results are applicable to the search parameter', () => {

    before(() => {
        cy.visit('https://www.google.com')
    })

    it('Verify search results are applicable to the search parameter', () => {
        googlePage.validateGoogleHomePage()
        googlePage.performSearch()
        googlePage.verifyResultsPage()
        googlePage.verifyResultsMatchSearchParam()
    })

    after(() => {
    })

})