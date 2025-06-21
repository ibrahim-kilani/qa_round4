/// <reference types= ‘cypress’>

describe('selectors', () => {
    it('example of selectors', () => {
        cy.visit("https://www.telerik.com/support/demos")
        cy.get(".u-s-mb0")
        cy.get(".NavAlt-anchor").eq("3")//same 
        cy.get("[aria-label=Reporting]")// same
        cy.get("#web")
        cy.get(".TK-Footer-Link").contains("Blogs")//same
        cy.get(".TK-Footer-Link").eq("6")//same
        cy.get('[href="/blogs"]').last()//same
        cy.get(".TK-Footer-List-Social").first().find("li")//sochal links - Hard

    });
});
