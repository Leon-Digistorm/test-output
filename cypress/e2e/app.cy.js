describe('app spec', () => {
    it('can mark todo as complete', () => {
        // requires dev server running
        cy.visit('http://localhost:5173/')

        cy.get('[data-cy="tasks"]').find('li').first().as('item')

        // badge should say incomplete
        cy.get('@item').find('[data-cy="badge"]').as('badge').contains('incomplete')

        // click on menu button
        cy.get('@item').find('[data-cy="menu"]').find('button').click()

        // find Mark as complete menu item
        cy.get('@item').get('[data-cy="menuitem"]').contains('Mark as complete').click()

        // badge should say complete
        cy.get('@badge').contains('complete')
    })
})