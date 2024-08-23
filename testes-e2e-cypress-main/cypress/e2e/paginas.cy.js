describe('Testando múltiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('coelho1@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    cy.getByData('app-home').find('a').eq(2).click()
    cy.getByData('div-servicos').should('exist').and('be.visible')
    cy.getByData('app-home').find('a').eq(3).click()
    cy.getByData('titulo-investimentos').should('exist').and('have.text', 'Investimentos')
    })    
})

