import { When } from "@badeball/cypress-cucumber-preprocessor";

/* Step definition to visit test URL */
When('I go to myer {string} page', (url) => {
    cy.visit(url);
})