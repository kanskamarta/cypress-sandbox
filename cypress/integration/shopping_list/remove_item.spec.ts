import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

let itemName: string;

When("I remove item", () => {
  cy.getByTestId(locators.item)
    .first()
    .invoke("text")
    .then((selectedItem) => {
      itemName = selectedItem;
    });
  cy.getByTestId(locators.removeButton).first().click();
});

Then("this item is not visible on shopping list", () => {
  cy.getByTestId(locators.shoppingList).should("not.contain", itemName);
});

And("the number of items decreases", () => {
  cy.getByTestId(locators.numbersOfItems).should("have.text", 3);
});
