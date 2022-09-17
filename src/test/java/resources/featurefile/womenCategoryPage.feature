Feature: Women Category Page Test

  Scenario: Verify user should navigate to women category page successfully
    Given I am on home page
    When I click on women tab
    Then I verify women text


  @smoke
  Scenario Outline:  Verify user should add product to the cart successfully
    Given I am on home page
    When I click on women tab
    And I click on product "<product>"
    And I change quantity "<qty>"
    And I select size "<size>"
    And I select colour "<colour>"
    And I click on add to cart button
    And I verify the message product successfully added to your shopping cart
    Then click on x button nad close the pop up
    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |