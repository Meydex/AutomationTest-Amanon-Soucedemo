# language: en

Feature: Login Functionality

  Scenario: Successful login with valid credentials

    Given I am on the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Login with invalid password

    Given I am on the login page
    When I enter valid username and invalid password
    And I click the login button
    Then I should see an error message


Scenario: Login with invalid username
  
    Given I am on the login page
    When I enter invalid username and valid password
    And I click the login button
    Then I should see an error message

Scenario: Login with a empty fields
  
    Given I am on the login page
    When I leave the username and password fields empty
    And I click the login button
    Then I should see an error message