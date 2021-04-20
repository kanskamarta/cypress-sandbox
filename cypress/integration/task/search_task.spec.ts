import { When, Then } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

When("when I search for a {string}", (text) => {
  cy.getByTestId(locators.searchInput).type(text);
});

Then("the the list is narrowed down to {string} only", (text) => {
  cy.getByTestId(locators.shoppingList).contains(text);
  cy.getByTestId(locators.shoppingList)
    .find("li")
    .its("length")
    .should("eq", 1);
});
