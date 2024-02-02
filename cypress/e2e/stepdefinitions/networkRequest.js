import { When } from "@badeball/cypress-cucumber-preprocessor";
import { urls } from "../../support/interceptURL";

//use intercept/wait to moniter network interaction
When("I intercept the {string} request sent to {string}", (method, partURL) => {
    cy.intercept({
        method,
        url: urls[partURL]
    }).as(partURL)
});

When("I wait for the response to {string}", (request, alias) => {
    let requests = alias ? [request, ...alias.raw().flat()] : request;
    cy.wait(requests);
});