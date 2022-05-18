import type { Rule } from 'axe-core';

const testUrls = ['/'];
const disabledRules: Rule[] = [];

const initialize = (url: string) => {
	cy.visit(url);

	cy.injectAxe();
};

const assertAll = () => {
	cy.configureAxe({
		rules: disabledRules
	});

	cy.checkA11y();
};

describe('accessibility', () => {
	testUrls.forEach((url) => {
		it(`Page ${url} has no detectable accessibility violations`, () => {
			initialize(url);
			assertAll();
		});
	});
});
