import { When } from "cypress-cucumber-preprocessor/steps";

When("I visit {word}", (path) => {
  cy.visit(path);
});
