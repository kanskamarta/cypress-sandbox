import { When, Then } from "cypress-cucumber-preprocessor/steps";
import locators from "../utils/locators";

let itemName: string;

When("when I search for a item", async () => {
  cy.getByTestId(locators.item)
    .first()
    .invoke("text")
    .then((selectedItem) => {
      itemName = selectedItem;
      cy.getByTestId(locators.searchInput).type(itemName);
    });
});

Then("the the list is narrowed down to this word only", () => {
  cy.getByTestId(locators.shoppingList).contains(itemName);
  cy.getByTestId(locators.shoppingList)
    .find("li")
    .its("length")
    .should("eq", 1);
});
