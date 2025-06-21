describe('Create Set Form Tests', () => {
  beforeEach(() => {
    cy.visit('/starter/index.html');
  });

  it('should show an error when submitting an empty set name', () => {
    cy.get('[data-cy=create-set-form]').within(() => {
      cy.get('[data-cy=set-name-input]').clear();
      cy.get('[data-cy=submit-btn]').click();
    });
    cy.get('[data-cy=error-message]')
      .should('be.visible')
      .and('contain.text', 'Set name cannot be empty');
  });

  it('should successfully submit when set name is valid', () => {
    cy.get('[data-cy=create-set-form]').within(() => {
      cy.get('[data-cy=set-name-input]').clear().type('My New Set');
      cy.get('[data-cy=submit-btn]').click();
    });
    cy.get('[data-cy=error-message]').should('not.exist');
    // Add assertion for successful submission (e.g., confirmation message or page change)
  });
});
