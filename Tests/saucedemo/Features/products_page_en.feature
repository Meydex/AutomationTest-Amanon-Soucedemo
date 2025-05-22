# language: en

Feature: Products Page (Inventory)

  Scenario: Add item to the shopping cart

    Given I am on the products page
    When I view the desired item
    And I click "Add to cart"
    Then the item should be added to the shopping cart

  Scenario: View item details

    Given I am on the products page
    When I click on the item I want to view
    Then I should see the detailed information of the item

  Scenario: Add item to the cart from the item details page

    Given I am on the item details page
    When I check the item information
    And I click "Add to cart"
    Then the item should be added to the shopping cart

  Scenario: Return to the products page from the item page

    Given I am on the item details page
    When I click "Back to products"
    Then I should return to the products page

  Scenario: Remove item from the cart on the products page

    Given I am on the products page
    When I view an item already added to the cart
    And I click "Remove"
    Then the item should be removed from the shopping cart

  Scenario: Remove item from the cart on the item details page

    Given I am on the item details page
    When I see that the item is already in the cart
    And I click "Remove"
    Then the item should be removed from the shopping cart

  Scenario: Apply filters on the products page

    Given I am on the products page
    When I click on the filter menu
    And I select a filter
    Then the items should be reorganized according to the selected filter

