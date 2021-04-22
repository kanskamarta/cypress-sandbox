import { And } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

And("the background has the correct color", () => {
  cy.getByTestId(locators.content).should(
    "have.css",
    "background-color",
    "rgb(236, 236, 236)"
  );
});

And("the buttons have the correct color", () => {
  cy.getByTestId(locators.addButton).should(
    "have.css",
    "color",
    "rgb(5, 66, 44)"
  );
  cy.getByTestId(locators.removeButton).should(
    "have.css",
    "color",
    "rgb(183, 28, 28)"
  );
});
