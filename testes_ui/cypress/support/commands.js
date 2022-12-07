// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Acessar página
Cypress.Commands.add('herokuApp', () => {
    cy.visit('https://the-internet.herokuapp.com/')
})

Cypress.Commands.add('herokuAppLogin', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
})

Cypress.Commands.add('herokuAppAlert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})

Cypress.Commands.add('enterLoginAndPassword', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.fa').click()
})

Cypress.Commands.add('clickAlarmJS', () => {
    cy.get(':nth-child(1) > button').click()
})