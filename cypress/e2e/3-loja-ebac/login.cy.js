///reference types="cypress"/>
describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('bia.teste@teste.com')
        cy.get('#password').type('biateste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, bia.teste (não é bia.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('bia1teste@teste.com')
        cy.get('#password').type('biateste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')

    });
    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('bia.teste@teste.com')
        cy.get('#password').type('biateste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail bia.teste@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')

    });

})

