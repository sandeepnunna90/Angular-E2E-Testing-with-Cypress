// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable {
    filterAdventures(text: string): void;
    createAdventure(id: number, title: string): void;
    deleteAdventure(id: number): void;
  }
}

Cypress.Commands.add('filterAdventures', (text: string): void => {
  cy.window().then((window: Window) => {
    cy.wrap(window).its('FilterComponent').invoke('onChange', text);  //onChange is the onchange event called in filter html
    cy.wait(1000);
    cy.wrap(window).its('appRef').invoke('tick');
  });
});

Cypress.Commands.add('createAdventure', (id: number, title: string): void => {
  cy.request('POST', 'http://localhost:3000/adventures', {
      "id": id,
      "title": title,
      "image": "../../assets/adventure-images/carved-rock-img-6.jpg",
      "description": "The Tara Mountains are a massif in Serbia, on the border with Bosnia. The massif, which has been declared a National Park, belongs to the Dinaric Alps and its highest peak reaches an altitude of 1,591 meters. Across these mountains, runs the beautiful Drina River, where we’ll be able to enjoy kayaking on the first day of the program.",
      "level": "Beginner",
      "duration": "3 days",
      "mountainRange": "Dinaric Alps",
      "numberOfParticipants": "Up to 20",
      "availability": "September",
      "defaultCommentsLength": 2,
      "comments": [
        {
          "name": "Jane",
          "comment": "Great experience!"
        },
        {
          "name": "Peter",
          "comment": "Excellent mountain with easy access!"
        }
      ]
  });
});

Cypress.Commands.add('deleteAdventure', (id: number): void => {
  cy.request({ method: 'DELETE', url: `http://localhost:3000/adventures/${id}`, failOnStatusCode: false });
});
