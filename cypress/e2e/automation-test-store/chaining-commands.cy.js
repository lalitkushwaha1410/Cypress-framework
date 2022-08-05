describe('inspect item', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/index.php?rt=content/contact')
    })

    it.only('chaining commands', () => {
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => { 
            const FirstNameText = text.find('label[for=ContactUsFrm_first_name]').text();
            expect(FirstNameText).to.contains('First name');

        })
      })

  })