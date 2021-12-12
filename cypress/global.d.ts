declare namespace Cypress {
	interface Chainable {
		authorizedVisit(path?: string): void;
		getBySelector(selector: string): Chainable<JQuery>;
		getBySelectorLike(selector: string): Chainable<JQuery>;
	}
}
