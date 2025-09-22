/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

export default class googleSearch {

    elements = {
        //googleLogo: () => cy.get('div svg[class="lnXdpd"]'),
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

        visitFinacleStatement() {
        cy.visit(Cypress.env('finacleStatement_url'));
        //cy.smartVisit(Cypress.env('finacleStatement_url'));
    };

    onLandingPage() {
        cy.url().should('contain', Cypress.env('finacleStatement_url'));
    }

    checkPageTitle() {
        cy.contains("Finacle Statement");
        //cy.contains("DQI Portal"); 
    }

    visitGoogle() {
        cy.visit(Cypress.env('web_url'));
        cy.url().should('contain', Cypress.env('web_url'));
    };

    validateGoogleHomePage() {
        //this.elements.googleLogo().should('be.visible');
        this.elements.searchInput().should('be.visible');
        this.elements.searchButton().should('be.visible');

        return this;
    }
    enterSearchParam() {
        this.elements.searchInput().type('What is software Testi');

        return this;
    }
    verifyAutoSuggestion() {
        this.elements.searchInput().should('include.value', 'What is software Te');

        return this;
    }
    performSearch() {
        this.elements.searchInput().type('What is software testing');
        this.elements.searchButton().click();

        return this;
    }
    verifyResultsPage() {
        this.elements.searchInput().should('have.text', 'What is software testing');
        this.elements.resultItem01().should('be.visible');

        return this;
    }
    verifyResultsMatchSearchParam() {
        this.elements.resultItem01().should('contain', 'Software Testing');
        this.elements.resultItem02().should('contain', 'Software Testing');
        this.elements.resultItem03().should('contain', 'Software Testing');

        return this;
    }
    navigateImageResultsPage() {
        this.elements.imageMenuItem().should('be.visible');
        this.elements.imageMenuItem().click();

        return this;
    }
    verifyImageResults() {
        this.elements.imagesResultItems().should('be.visible');

        return this;
    }
    clickSearchResultLink() {
        this.elements.searcResultLink().click();

        return this;
    }
}
const googlesearch = new googleSearch();
        
Given("the user is on google home page", () => {
    googlesearch.visitGoogle();
    googlesearch.validateGoogleHomePage();

});

When("the user types into the search field", () => {
    googlesearch.enterSearchParam();
});

Then("applicable auto suggestions are displayed", () => {
    googlesearch.verifyAutoSuggestion();
});

//const finStatement = new finacleStatement();
        
Given("the user visits finacle statement", () => {
    googlesearch.visitFinacleStatement();
});

When("the user is on finacle statement login page", () => {
    googlesearch.onLandingPage();
});

Then("the page tile Finacle Statement is displayed", () => {
    googlesearch.checkPageTitle();
});
