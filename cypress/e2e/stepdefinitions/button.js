import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { composeSelector } from "../../support/helperFunctions";

/* Step definition to click a button */
Then('I click on the {string} button selected by {string}', (attrVal, selector) => {
    selector = composeSelector(attrVal, selector);
    cy.get(`${selector}:visible`).click();
});