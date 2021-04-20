import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

When("I add new task", () => {
  cy.getByTestId(locators.addInput).type("test");
  cy.getByTestId(locators.addButton).click();
});
Then("this task is visible on shopping list", () => {});
And("the number of tasks increases", () => {});
