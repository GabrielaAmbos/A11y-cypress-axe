/// <reference types="Cypress"/>
/// <reference types="@applitools/eyes-cypress" />

describe('Contrast Advisor', () => {

    it('Deve verificar o contraste da pagina', () => {
        cy.eyesOpen({ 
            appName: 'Contrast Advisor Demo',
            bachName: 'Contrast Advisor Test',
        })
        cy.visit('https://heavyweight.nl/')
        cy.eyesCheckWindow()
        cy.eyesClose()
    })
})