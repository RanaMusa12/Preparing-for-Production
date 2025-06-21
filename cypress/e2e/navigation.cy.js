describe('Navigation Menu Tests', () => {
  beforeEach(() => {
    cy.visit('/starter/index.html');
  });

  it('should load the Home page when clicking Home', () => {
    cy.get('[data-cy=nav-home]').click();
    // Verify Home page loaded - example: check header or URL or specific element
    cy.get('h1[data-cy=header]').should('contain', 'Study Night');
    // You may also check URL if routing is implemented:
    // cy.url().should('include', '/home');
  });

  it('should load the About page when clicking About', () => {
    cy.get('[data-cy=nav-about]').click();
    // Verify About page content appears
    // Example:
    cy.get('main').should('contain.text', 'About'); 
  });

  it('should load the Card Sets page when clicking Card Sets', () => {
    cy.get('[data-cy=nav-cardsets]').click();
    // Verify Card Sets page content appears
    cy.get('main').should('contain.text', 'Card Sets');
  });
});
