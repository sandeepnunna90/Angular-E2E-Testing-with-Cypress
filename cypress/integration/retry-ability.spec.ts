describe('Retry-ability', () => {
  it('should have filtered by criteria displayed', () => {
    cy.visit('/');

    cy.get('input').type('Tara');

    // pitfall - the intial get only renders the one li element and
    // when tries to find it doesn't find the filtered by
    // the retry only happens on the find as that is where it failed.
    // filter-by apperas later on on the application but the cy.get needs to executed again
    // to get the filtered-by in the find.
    // cy.get('ul li')
    // .find('p[data-test-automation="filtered-by"] b')
    // .should('have.text', 'Tara');


    // To resolve the pit fall look below this we add a line in between get and find
    // should('have.length', 2) -> cypress keeps retrying this until both li elements are return
    // when it goes to the find - we have the filtered-by element
    // the assertion is satisfied and the test continues
    cy.get('ul li')
      .should('have.length', 2)
      .find('p[data-test-automation="filtered-by"] b')
      .should('have.text', 'Tara');
  });
});;

// should - assertion
// get - command
