Feature: Create Account Page Test

  Scenario: Verify that user should create account successfully
    Given I am on home page
    When I click on sign in link
    And I enter email address
    And I click on create an account button
    And I fill all mandetory fields
    And I click on Register Button
    Then I verify message my account


