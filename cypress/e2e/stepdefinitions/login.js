import {When} from "@badeball/cypress-cucumber-preprocessor";
//To test simpro base urls such as simpro suite/simpro cloud

When('I go to base url', () => {
  cy.visit(Cypress.config().baseUrl);
})