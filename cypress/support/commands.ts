/**
 * @summary Visit a given path as an authorized user
 */
Cypress.Commands.add('authorizedVisit', (path) => {
	cy.intercept('GET', '/api/user/user', {
		fixture: 'user.json'
	});

	cy.visit(path || '/');
});

/**
 * @summary Select a `data-testid` element by its exact key
 */
Cypress.Commands.add('getBySelector', (selector) => {
	return cy.get(`[data-testid=${selector}]`);
});

/**
 * @summary Select a `data-testid` element by its approximate key
 */
Cypress.Commands.add('getBySelectorLike', (selector) => {
	return cy.get(`[data-testid*=${selector}]`);
});
