import { When } from "@badeball/cypress-cucumber-preprocessor";
import { composeSelector } from "../../support/helperFunctions";

/*step definition to select the desired item from the suggestion drop down box*/
When('I select {string} from the {string} dropdown suggestions selected by {string}', (selectionItem, attrVal, selector) => {
    selector = composeSelector(attrVal, selector);
    cy.contains(`${selector}:visible li`, new RegExp(selectionItem))
    .should('be.visible')
    .click();
});