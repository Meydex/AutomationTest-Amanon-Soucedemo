# language: en

Feature: Your Information Page

  Scenario: Fill out "Your Information" page with valid data

    Given I am on the "Your Information" page
    When I fill in first name, last name, and valid postal code
    And I click on "Continue"
    Then I should be redirected to the checkout overview page

  Scenario: Leave "postal code" field empty

    Given I am on the "Your Information" page
    When I fill in first name and last name and leave the "postal code" field empty
    And I click on "Continue"
    Then I should see an error message

  Scenario: Leave "first name" field empty

    Given I am on the "Your Information" page
    When I fill in last name and postal code and leave the "first name" field empty
    And I click on "Continue"
    Then I should see an error message

  Scenario: Leave "last name" field empty

    Given I am on the "Your Information" page
    When I fill in first name and postal code and leave the "last name" field empty
    And I click on "Continue"
    Then I should see an error message

  Scenario: Leave all fields empty

    Given I am on the "Your Information" page
    When I leave all fields empty
    And I click on "Continue"
    Then I should see an error message
