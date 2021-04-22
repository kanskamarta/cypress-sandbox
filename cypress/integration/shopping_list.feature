Feature: Shopping list

    Background: Visit home page
        Given I visit index.html
        And the page title and header is correct

    Scenario: Add task
        When I add new item
        Then this item is visible on shopping list
        And the number of items increases

    Scenario: Remove task
        When I remove item
        Then this item is not visible on shopping list
        And the number of items decreases

    Scenario: Search for task
        When when I search for a item
        Then the the list is narrowed down to this word only

    Scenario: Visual tests
        And the background has the correct color
        And the buttons have the correct color
