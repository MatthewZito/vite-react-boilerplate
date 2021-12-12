import type { Rule } from 'axe-core';

const testUrls = ['/', '/join', '/login'];

const initialize = (url) => {
	cy.visit(url);

	cy.injectAxe();
};

const assertAll = () => {
	const disabledRules: Rule[] = [
		// see discussion https://github.com/dequelabs/axe-core/issues/795
		// my personal take is that this rule is in some cases contradictory
		// and such a case is applicable here, hence disabling it
		{ id: 'landmark-complementary-is-top-level', enabled: false }
	];

	const axeFalsePositives = [
		// { id: 'duplicate-id', enabled: false },
		// { id: 'document-title', enabled: false },
		// { id: 'html-has-lang', enabled: false }
	];

	disabledRules.push(...axeFalsePositives);

	const devFalsePositives = [
		// { id: 'landmark-no-duplicate-contentinfo', enabled: false },
		// { id: 'landmark-unique', enabled: false }
	];

	const ignored = [{ id: 'page-has-heading-one', enabled: false }];

	if (Cypress.env('STAGE') === 'dev') {
		disabledRules.push(...devFalsePositives, ...ignored);
	}

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
