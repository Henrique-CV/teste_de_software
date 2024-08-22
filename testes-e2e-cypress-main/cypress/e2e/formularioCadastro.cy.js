describe('Formulário cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('henrique2')
        cy.getByData('email-input').type('coelho1@email.com')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')

    })

    it('Não deve permitir um e-mail inválido!', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('sla@email')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it('Não deve permitir um campo nome em branco', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('senha-input').type('456789')
        cy.getByData('email-input').type('hh@email.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório!')
    })
})