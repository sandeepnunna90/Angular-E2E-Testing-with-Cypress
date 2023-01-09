import { AdventureDetailsPage } from "./adventure-details.page";

export class HomePage {
  visit(): HomePage {
    cy.visit('/');
    return this;
  }

  clickMoreDetailsBtn(id: Number): AdventureDetailsPage {
    cy.get(`a[href="/adventure/${id}"]`).click();
    return new AdventureDetailsPage();
  }
}
