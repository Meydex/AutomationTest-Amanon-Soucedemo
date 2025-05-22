# language: en

Feature: Checkout Page

  Scenario: Complete purchase

    Given I am on the "Checkout" page
    When I view the product information and total price
    And I click on "Finish"
    Then I should receive a purchase confirmation message

  Scenario: Cancel purchase

    Given I am on the "Checkout" page
    When I view the product information and total price
    And I click on "Cancel"
    Then I should be redirected to the products page
