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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Clear the value of an input or textarea.
Cypress.Commands.add("clearField", (selector) => {
    cy.get(`${selector}:visible`).should('not.be.disabled').clear();
});

//Randomize name - Generate a random string and use it as a prefix for the name.
Cypress.Commands.add("getUniqueName", (name) => {
    let randomPrefix = Math.random().toString(36).substring(2, 5);
    return randomPrefix + "-" + name;
  });