describe('Filter', () => {
  it('should display filter criteria', () => {
    cy.visit('/');
    cy.window().then((window: Window) => {
      cy.wrap(window).its('FilterComponent').invoke('onChange', 'Tara'); //onChange is the onchange event called in filter html
      cy.wait(1000);
      cy.wrap(window).its('appRef').invoke('tick');
    });

    cy.get('p[data-test-automation="filtered-by"]')
      .should('have.text', 'Filtered by: Tara');
  });
});

//App Actions are used here. We directly interact with the angular components instead of the UI.
