/// <reference types="cypress" />

describe('iterate over list', () => {


  it('click on Men From header', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
    cy.get('li[class="col-md-2 col-sm-2 col-xs-6 align_center"]').each(($el, index, $list) => {

      cy.log($el.text());

      if ($el.text().includes('Skincare')) {
        cy.wrap($el).click();
      }
    })
  })
})