import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

let itemName: string;

When("I remove task", () => {
  cy.getByTestId(locators.item)
    .first()
    .invoke("text")
    .then((selectedItem) => {
      itemName = selectedItem;
    });
  cy.getByTestId(locators.removeButton).first().click();
});

Then("this task is not visible on shopping list", () => {
  cy.getByTestId(locators.shoppingList).should("not.contain", itemName);
});

And("the number of tasks decreases", () => {
  cy.getByTestId(locators.numbersOfItems).should("have.text", 3);
});
