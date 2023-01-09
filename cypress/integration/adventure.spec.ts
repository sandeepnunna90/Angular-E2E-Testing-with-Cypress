describe('Adventure', () => {
  it('should visit CarvedRock homepage', () => {
    cy.visit('/');
  });

  it('should open the Breithorn adventure', () => {
    cy.get('a[href="/adventure/1"]').click();
    cy.get('#title').should('have.text', 'Breithorn, Pennine Alps');
  });
});
