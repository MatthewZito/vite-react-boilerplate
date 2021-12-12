declare namespace Cypress {
	interface Chainable {
		getBySelector(selector: string): Chainable<JQuery>;
	}
}
