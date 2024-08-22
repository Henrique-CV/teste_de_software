describe('Página Principal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
  it('Deve renderizar o h2 corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-h2').contains('Vantagens do nosso banco:')
  })
})

describe('vantagens', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar o h3 de cartão corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-cartao').contains('Conta e cartão gratuitos')
  })
  it('Deve renderizar o p de cartão corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('cartao').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
  it('Deve renderizar o h3 de saques', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-saques').contains('Saques sem custo')
  })
  it('Deve renderizar o p de saques corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('saques').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
  it('Deve renderizar o h3 de pontos', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-pontos').contains('Programa de pontos')
  })
  it('Deve renderizar o p de pontos corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('pontos').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
  it('Deve renderizar o h3 de seguro', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-seguro').contains('Seguro Dispositivos')
  })
  it('Deve renderizar o p de seguro corretamente', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('seguro').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

describe('imagens', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar as imagens corretamente', () => {
  cy.getByData('imagem').should("be.visible")
  })
  it('indentificar texto conta', () => {
    cy.indentificatexto('div2').find("h3").should("contain", "Conta e cartão gratuitos")
  })
})

