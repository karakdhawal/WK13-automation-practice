Feature: Sign In Page Test

  Scenario: User should navigate to sign in page successfully
    Given I am on home page
    When I click on sign in link
    Then I verify that Authentication message is displayed

  Scenario Outline: Verify the Error Message with invalie credentials
    Given I am on home page
    When I click on sign in link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on sign in button
    Then I verify the error message "<message>"
  Examples:
        | username       | password | message                    |
        |                | 123456   | An email address required. |
        | abcd@gmail.com |          | Password is required.      |
        | adfdfgfg       | 123456   | Invalid email address.     |
        | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario:
    Given I am on home page
    When I click on sign in link
    And I enter emailid
    And I enter password
    And I click on sign in button
    Then i verify that sign out link is displayed

  Scenario:
    Given I am on home page
    When I click on sign in link
    And I enter emailid
    And I enter password
    And I click on sign in button
    And I click on sign out Link
    Then I verify sign in link displayed
