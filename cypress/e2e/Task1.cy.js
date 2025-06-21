/// <reference types= ‘cypress’>


describe('task1', () => {
    it('first cypress task', () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".navbar-brand")
        cy.get(".nav-item").contains("Home")
        cy.get(".nav-item").eq(2)
        cy.get("h1")
        cy.contains("Have an account?")
        cy.get(".form-group").first("")
        cy.get(".form-group").eq("1")
        cy.get(".form-group").eq("2")
        cy.get(".btn")
        cy.get(".logo-font")
        cy.get(".attribution")

        
    });


});