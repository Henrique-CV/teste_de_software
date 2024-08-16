describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.getByData('titulo-principal').contains('Vantagens do nosso banco:')
    cy.getByData('imagem-saque').find("h3").should("contain", "Saques sem custo")
  })
})