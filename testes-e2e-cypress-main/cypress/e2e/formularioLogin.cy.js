describe('Formulário de login', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    
    it('Não deve permitir um e-mail inválido!', () => {
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it.only('Não deve permitir um campo em branco', () => {

        cy.getByData('botao-login').click()
        
        // cy.getByData('email-input').type('') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
        
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório') /* a
        
        mensagem exibida deve ser: "o campo email é obrigatório" */
        })
})


