# language: en

Feature: Logout 

  Scenario: User logout 

    Given that I am on the products page
    When I click on the three bar menu in the top left corner
    And click on the logout button
    Then I should be redirected to the login page