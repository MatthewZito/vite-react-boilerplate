/**
 * Select a `data-testid` element by its exact key
 */
Cypress.Commands.add('getBySelector', (selector) => {
	return cy.get(`[data-testid=${selector}]`);
});
