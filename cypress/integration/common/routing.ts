import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit {word}", (path) => {
  cy.visit(path);
  cy.request(path).then((response) => {
    expect(response.status).eq(200);
  });
});
