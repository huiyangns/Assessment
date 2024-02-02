import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { composeSelector, getStyle } from "../../support/helperFunctions";

/* Step definition to check the page header */
When('I wait to see {string} in the page header', (heading) => {
    cy.get('h1:contains("' + heading + '")', { timeout: 15000 }).should('be.visible');
})

/* Step definition to check whether an element with a text is visible on UI or not */
Then('I {string} the element {string} with text {string} selected by {string} on the page', (checkCase, attrVal, text, selector) => {
    selector = composeSelector(attrVal, selector);
    switch(checkCase){
        case "should see":
        case "see":
            cy.contains(`${selector}`, text, {timeout: 15000}).should('be.visible');
            break;
        default:
            cy.contains(`${selector}`, text, {timeout: 15000}).should('not.be.visible');
    }
})

/* Step definition to check whether an element has the css class or not */
Then('I {string} the text {string} decorated by {string} style', (checkCase, text, style) => {
    style = getStyle(style);
    switch(checkCase){
        case "should see":
        case "see":
            cy.contains(text, { matchCase: true }).should('have.class', style)
            break;
        default:
            cy.contains(text, { matchCase: true }).should('not.have.class', style)
    }
})

Then('I wait to see {int} seconds', (seconds) => {
    cy.wait(seconds * 1000)
})