import { AdventureDetailsPage } from "./pages/adventure-details.page";
import { HomePage } from "./pages/home.page";

describe('Adventure', () => {

  const homePage = new HomePage();
  const adventureDetailsPage = new AdventureDetailsPage();

  before(() => {
    cy.deleteAdventure(4);
    cy.createAdventure(4, 'New Adventure');
  });

  it('should visit CarvedRock homepage', () => {
    homePage.visit();
  });

  it('should open the New Adventure', () => {
    homePage.clickMoreDetailsBtn(4).getAdventureTitle().should('have.text', 'New Adventure');
  });

  it('should post a comment', () => {
    adventureDetailsPage
      .resetComments()
      .addComment('Josh', 'What a great adventure!')
      .getLastComment().then($el => {
        cy.wrap($el).find('p').should('have.text', 'What a great adventure!');
        cy.wrap($el).find('footer').should('have.text', 'Josh');
      });
    // Note: Assertions are not part of page objects, so the 'should' part should stay in the spec
    // chaining methods makes it more clean and readble
  });

  it('should not post a comment if the comment text is missing', () => {
    adventureDetailsPage
      .addComment('Josh', '')
      .getCommentFieldValidationError()
      .should('have.text', 'Comment is required.');
  });
});
