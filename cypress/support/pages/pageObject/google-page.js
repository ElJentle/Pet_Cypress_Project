class buildBundle {

    elements = {
        googleLogo: () => cy.get('img[alt="Google"]'),
        searchInput: () => cy.get('textarea[id="APjFqb"]'),
        searchButton: () => cy.get('input[value="Google Search"]:eq(1)'),
        autoSuggestItem: () => cy.get('div[class="pcTkSc"]:eq(0)'),
        resultItem01: () => cy.get('div[class="MjjYud"]:eq(0)'),
        resultItem02: () => cy.get('div[class="MjjYud"]:eq(1)'),
        resultItem03: () => cy.get('div[class="MjjYud"]:eq(2)'),
        imageMenuItem: () => cy.get('div[class="YmvwI"]:contains("Images")'),
        imagesResultItems: () => cy.get('div[data-attrid="images universal"]'),
        searcResultLink: () => cy.get('h3[class="LC20lb MBeuO DKV0Md"]:eq(0)')
    }

    validateGoogleHomePage() {
        this.elements.googleLogo().should('be.visible')
        this.elements.searchInput().should('be.visible')
        this.elements.searchButton().should('be.visible')
    }
    enterSearchParam() {
        this.elements.searchInput().type('What is software Testi')
    }
    verifyAutoSuggestion() {
        this.elements.autoSuggestItem().should('contain', 'what is software testing')
    }
    performSearch() {
        this.elements.searchInput().type('What is software testing')
        this.elements.searchButton().click()
    }
    verifyResultsPage() {
        this.elements.searchInput().should('have.text', 'What is software testing')
        this.elements.resultItem01().should('be.visible')
    }
    verifyResultsMatchSearchParam() {
        this.elements.resultItem01().should('contain', 'Software Testing')
        this.elements.resultItem02().should('contain', 'Software Testing')
        this.elements.resultItem03().should('contain', 'Software Testing')
    }
    navigateImageResultsPage() {
        this.elements.imageMenuItem().should('be.visible')
        this.elements.imageMenuItem().click()
    }
    verifyImageResults() {
        this.elements.imagesResultItems().should('be.visible')
    }
    clickSearchResultLink() {
        this.elements.searcResultLink().click()
    }

}
export default new buildBundle();