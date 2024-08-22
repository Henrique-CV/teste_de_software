describe('Testando múltiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    })
})

