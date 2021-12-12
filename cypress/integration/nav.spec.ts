describe('site nav', () => {
	beforeEach(() => {
		cy.visit('/');

		cy.getBySelector('submit').as('submit');
		cy.getBySelector('toggle').as('toggle');
	});

	it('defaults to login for anonymous users', () => {
		cy.get('@submit').contains('Login');
	});

	it('toggles between join and login', () => {
		cy.get('@submit').contains('Login');

		cy.get('@toggle').contains('Need an account?');
		cy.get('@toggle').click();

		cy.get('@submit').contains('Join');

		cy.get('@toggle').contains('Already have an account?');
		cy.get('@toggle').click();

		cy.get('@submit').contains('Login');
	});

	it('redirects to the dash if logged in', () => {
		cy.authorizedVisit();

		cy.url().should('include', '/u/dashboard');
	});

	it('redirects to the dash after logging in', () => {
		cy.intercept('POST', '/api/user/login', {
			fixture: 'user.json'
		}).as('auth');

		cy.visit('/login');

		cy.getBySelector('email').type('test@test.com');
		cy.getBySelector('password').type('password');
		cy.get('@submit').click();

		cy.wait('@auth');

		cy.url().should('include', '/u/dashboard');
	});
});
