import { And } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

And("the page title and header is correct", () => {
  cy.title().should("eq", "Shopping list");
  cy.getByTestId(locators.title).should("have.text", "Shopping list");
});
