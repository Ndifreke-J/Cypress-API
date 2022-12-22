/// <reference types="cypress" />

describe("REST API WITH CYPRESS", () => {
    it('API Test-Header Validation', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include','application/json; charset=utf-8')
    })

    it('API Test-Status Validation', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('status')
            .should('equal', 200)
    })

    it('API Test-name value Validation', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('body')
            .should('include', {name:'pikachu'})
    })
})

it.only('API Test-404 Status Validation', () => {
    cy.request({
        method: 'Get',
        url: 'https://pokeapi.co/api/v2/pokemon/1000/',
        failOnStatusCode: false,
    }).as('pokemon')
    cy.get('@pokemon').its('status')
        .should('equal', 404)
})
