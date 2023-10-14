describe('App components', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.get(".navbar-brand").contains('Error')
        cy.get(".nav-link").contains('Body').click()
        cy.location("pathname").should('eq','/classState')
        cy.get(".nav-link").contains('BodyHooks').click()
        cy.location("pathname").should('eq','/hooks')
        cy.get(".nav-link").contains('IndexRoute').click()
        cy.location("pathname").should('eq','/carousel')
    })

    it('failing', () => {
        cy.visit('http://localhost:3000/')
    })
})