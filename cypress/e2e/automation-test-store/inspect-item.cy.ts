/// <reference types="cypress" />

describe('inspect item', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
    })

    it('Test- click on webelement directly', () => {
      cy.get('a[title="Skinsheen Bronzer Stick"]').scrollIntoView().click();
    })

    it('test2 - test with chaining commands', () => {

      cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').scrollIntoView().click();
    })

    it.only('test3- test with chaining commands ', () => {

      cy.get('.fixed_wrapper').get('.prdocutname').eq(0).click();
    })

  })