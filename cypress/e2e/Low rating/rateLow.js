import apiHelper from '../../support/pages/API_petstore'

describe('Operations about user', () => {
    elements = {
        createAccountBtn: () => cy.get('span:contains("Create account")'),
        selectAccoutRole: () => cy.get('ul[role="menu"]:eq(0)'), //li span:contains("For my personal use")
        selectAccoutRole: () => cy.get('ul[role="menu"]:eq(1)'), //For my child
        yesBtn: () => cy.get('button:contains("Yes, continue")'),
        firstName: () => cy.get('input[id="firstName"]'),
        lastName: () => cy.get('input[id="lastName"]'),
        gender: () => cy.get('#gender'),
        month: () => cy.get('#month'), //Male month day year
        day: () => cy.get('#day'),
        year: () => cy.get('#year'),
        nextBtn: () => cy.get('button:contains("Next")'),
        selectEmailAddress: () => cy.get('div[aria-labelledby="selectionc2"]'),
        selectEmailAddress_02: () => cy.get('div[class="t5nRo Id5V1"]:eq(0)'),
        password: () => cy.get('input[name="Passwd"]'),
        confirmPassword: () => cy.get('input[name="PasswdAgain"]'),
        searcResultLink: () => cy.get('h3[class="LC20lb MBeuO DKV0Md"]:eq(0)')
    }

    it('Create user', () => {


    })

})