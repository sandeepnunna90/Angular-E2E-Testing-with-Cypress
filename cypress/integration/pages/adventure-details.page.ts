export class AdventureDetailsPage {

  getAdventureTitle(): Cypress.Chainable {
    return cy.get('#title');
  }

  resetComments(): AdventureDetailsPage {
    cy.contains('Reset Comments').click();
    return this;
  }

  addComment(name: string, comment: string): AdventureDetailsPage {
    cy.contains('Add Comment').click();

    if (name) {
      cy.get('#name').type('Josh');
    }

    if (comment) {
      cy.get('#comment-text').type('What a great adventure!');
    }

    cy.get('#add-comment-button').click();

    return this;
  }

  getLastComment(): Cypress.Chainable {
    return cy.get('div[data-test-automation="user-comments"] blockquote:last-child');
  }

  getCommentFieldValidationError(): Cypress.Chainable {
    return cy.get('div[data-test-automation="comment-text"] .text-danger');
  }
}

