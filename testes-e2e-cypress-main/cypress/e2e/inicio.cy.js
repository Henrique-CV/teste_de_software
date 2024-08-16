describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    
    cy.getByData('vantagens').contains('Vantagens do nosso banco:')
    
    cy.getByData('presente').find("h3").should("contain", "Conta e cartão gratuitos")
    cy.getByData('presente').find("p").should("contain", "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.")
    
    cy.getByData('saque').find("h3",).should("contain", "Saques sem custo")
    cy.getByData('saque').find("p",).should("contain", "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.")
    
    cy.getByData('pontos').find("h3",).should("contain", "Programa de pontos")
    cy.getByData('pontos').find("p",).should("contain", "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!")
    
    cy.getByData('seguro').find("h3",).should("contain", "Seguro Dispositivos")
    cy.getByData('seguro').find("p",).should("contain", "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.")
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar imagem correto!', () => {
    cy.visit('http://localhost:3000')
    
  cy.getByData('img').should("be.visible")

  })
})