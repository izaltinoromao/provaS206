describe('cenários de teste para o heroku app', () => {


    it('Teste - Acessando a página', () => {
        cy.herokuApp()
        cy.get(':nth-child(21) > a').click()
    })

    it('Teste - Fazendo login', () => {
        cy.herokuAppLogin()
        cy.enterLoginAndPassword('tomsmith', 'SuperSecretPassword!')
        cy.get('#flash').should('contain.text', 'You logged into a secure area!')
    })

    it('Teste - Fazendo login inválido', () => {
        cy.herokuAppLogin()
        cy.enterLoginAndPassword('test', 'test')
        cy.get('#flash').should('contain.text', 'Your username is invalid!')
    })

    it('Test - Testando janela de teste JS', () => {
        cy.herokuAppAlert()
        cy.clickAlarmJS()
        cy.get('#result').should('contain.text', 'You successfully clicked an alert')
    })

})