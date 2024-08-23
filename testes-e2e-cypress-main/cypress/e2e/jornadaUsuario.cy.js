describe('Jornadas de usuário', () => {
    it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça logout', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    //paginas
    cy.location('pathname').should('eq','/home')

    cy.getByData('app-home').find('a').eq(1).click()
    cy.location('pathname').should('eq','/home/cartoes')
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')

    cy.getByData('app-home').find('a').eq(2).click()
    cy.location('pathname').should('eq','/home/servicos')
    cy.getByData('div-servicos').should('exist').and('be.visible')

    cy.getByData('app-home').find('a').eq(3).click()
    cy.location('pathname').should('eq','/home/investimentos')
    cy.getByData('titulo-investimentos').should('exist').and('have.text', 'Investimentos')

    //tranferencia
    cy.getByData('app-home').find('a').eq(0).click()
    cy.getByData('select-opcoes').select('Transferência')
    cy.getByData('form-input').type('80') 
    cy.getByData('realiza-transacao').click()
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80') 

    //deposito
    cy.getByData('select-opcoes').select('Depósito')
    cy.getByData('form-input').type('80')
    cy.getByData('realiza-transacao').click()
    cy.getByData('lista-transacoes').find('li').last().contains(' R$ 80')

    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq','/')
    })
})