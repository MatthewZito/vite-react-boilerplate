/**
 * Select a `data-testid` element by its exact key
 */
Cypress.Commands.add('getBySelector', (selector) => cy.get(`[data-testid=${selector}]`));
