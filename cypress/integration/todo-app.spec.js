/// <reference types="Cypress"/>

describe('Todo Application', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.injectAxe()
    })
    it('Deve verificar se a página está acessível', () => {
        cy.checkA11y()
    })

    it('Deve excluir elementos especificos da pagina', () => {
        cy.checkA11y({exclude: [['.learn']]}, null, null)
      })
      
    it('Deve testar a acessibilidade de um elemento especifico', () => {
        cy.checkA11y('.learn')
    })

    it('Deve incluir apenas regras com impactos graves', () => {
        cy.checkA11y(null, {
            includedImpacts: ['critical', 'serious']
        })
    })

    it('Deve excluir regras com impactos graves', () => {
        cy.checkA11y(null, {
            rules: {
                'color-contrast': { enabled: false }
            }
        })
    })
})