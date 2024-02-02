import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { composeSelector } from "../../support/helperFunctions";

/* Step definition to input a value in a field marked by selector */
When('I type {string} into {string} field selected by {string}', (value, attrVal, selector) => {
  selector = composeSelector(attrVal, selector);
  cy.clearField(selector);
  cy.get(`${selector}:visible`).type(value);
})

/* Step definition to input a unique value in a field marked by selector */
Then('I type unique value {string} into {string} field selected by {string}', (value, attrVal, selector) => {
  selector = composeSelector(attrVal, selector);
  cy.clearField(selector);
  cy.getUniqueName(value).then((value) => {
    cy.get(`${selector}:visible`).type(value);
  })
})