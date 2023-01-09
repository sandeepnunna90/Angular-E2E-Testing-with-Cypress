export class AdventureDetailsPage {

  getAdventureTitle(): Cypress.Chainable {
    return  cy.get('#title');
  }
}

