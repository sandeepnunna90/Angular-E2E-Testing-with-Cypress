describe('Mixing Synchronus and Asyncrhonus Code', () => {
  it('should clear a filter if active', () => {
    let isFilterActive = false;

    cy.visit('/');
    cy.get('input[data-test-automation="filter"]').type('Tara');
    cy.get('p[data-test-automation="filtered-by"] b').then($el => {
      if ($el.text() === 'Tara') {
        isFilterActive = true;
      }

      // need to put this inside the then block rather outside this cy element
      // becasue cypress adds all the lines of code in queue. if it is outside it doesn't
      // wait for the then block and isFilterActive is always false.
      if (isFilterActive) {
        cy.get('button[data-test-automation="clear-filter"]').click();
      }
    });

    cy.get('p[data-test-automation="number-of-results"] b').should('have.text', 3);
  });
});
