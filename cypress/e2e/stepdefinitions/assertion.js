import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { composeSelector, getStyle } from "../../support/helperFunctions";

/* Step definition to check the page header */
When('I wait to see {string} in the page header', (heading) => {
    cy.get('h1:contains("' + heading + '")', { timeout: 15000 }).should('be.visible');
})

/* Step definition to check whether an element with a text is visible on UI or not */
Then('I {string} the element {string} with text {string} selected by {string} on the page', (checkCase, attrVal, text, selector) => {
    selector = composeSelector(attrVal, selector);
    switch (checkCase) {
        case "should see":
        case "see":
            cy.contains(`${selector}`, text, { timeout: 15000 }).should('be.visible');
            break;
        default:
            cy.contains(`${selector}`, text, { timeout: 15000 }).should('not.be.visible');
    }
})

/* Step definition to check whether an element has the css class or not */
Then('I {string} the text {string} decorated by {string} style', (checkCase, text, style) => {
    style = getStyle(style);
    switch (checkCase) {
        case "should see":
        case "see":
            cy.contains(text, { matchCase: true }).should('have.class', style);
            break;
        default:
            cy.contains(text, { matchCase: true }).should('not.have.class', style);
    }
})

/* Step definition to check whether dropdown suggestions have correct number of matching address or not */
Then('I {string} the {string} dropdown suggestions selected by {string} has {int} matching address', (checkCase, attrVal, selector, length) => {
    selector = composeSelector(attrVal, selector);
    switch (checkCase) {
        case "should see":
        case "see":
            cy.get(`${selector} li`, { timeout: 15000 }).should('have.length', length)
            break;
        default:
            cy.get(`${selector} li`, { timeout: 15000 }).should('not.have.length', length)
    }
})

/* Step definition to check the value of a field */
Then('I {string} {string} in the {string} field selected by {string}', (checkCase, value, attrVal, selector) => {
    selector = composeSelector(attrVal, selector);
    switch (checkCase) {
        case "should see":
        case "see":
            cy.get(`${selector}`, { timeout: 15000 }).should(($ele) => {
                let val = $ele.val();
                expect(val).to.match(new RegExp(value))
            })
            break;
        default:
            cy.get(`${selector}`, { timeout: 15000 }).should(($ele) => {
                let val = $ele.val();
                expect(val).not.to.match(new RegExp(value))
            })
    }
})