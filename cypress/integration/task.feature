Feature: Shopping list

    Background: Visit home page
        Given I visit index.html

    Scenario: Add task
        When I add new task
        Then I this task is visible on shopping list
        And the number of tasks increases

    Scenario: Remove task
        When I remove task
        Then I this task is not visible on shopping list
        And the number of tasks decreases

    Scenario: Search for task
        When when I search for a 'tomato'
        Then the the list is narrowed down to 'tomato' only
