import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";
import * as faker from "faker";

const taskName = faker.random.word();

When("I add new task", () => {
  cy.getByTestId(locators.addInput).type(taskName);
  cy.getByTestId(locators.addButton).click();
});
Then("this task is visible on shopping list", () => {
  cy.getByTestId(locators.shoppingList).should("contain", taskName);
});

And("the number of tasks increases", () => {
  cy.getByTestId(locators.numbersOfItems).should("have.text", 5);
});
