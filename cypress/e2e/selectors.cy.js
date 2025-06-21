/// <reference types= ‘cypress’>

describe('first scn', () => {
    it('test 1', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".showcart").click()
        cy.get('.widget > ul > li').first()
    });
});