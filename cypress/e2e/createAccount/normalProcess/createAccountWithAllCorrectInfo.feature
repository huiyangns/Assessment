@regression
@createAccount
@normalProcess

Feature: Sign up today to create your online account and join MYER one.

  @retries(1)
  Scenario: Verify the whole create account process with correct info entered
    Given I go to myer "join" page
    And I wait to see "Create Account" in the page header
    When I type unique value "oliver.yang.test@gmail.com" into "email" field selected by "id"
    And I click on the "join" button selected by "id"
    And I "see" the element "create-account" with text "Create Account" selected by "id" on the page
    And I type "Randompass@1234" into "password" field selected by "id"
    And I type "oliver" into "first-name" field selected by "id"
    And I type "yang" into "last-name" field selected by "id"
    And I type "0452028467" into "mobile-phone" field selected by "id"
    And I type "12/06/2002" into "date-of-birth" field selected by "id"
    And I intercept the "+(get|post)" request sent to "Boulevard"
    And I type "Springfield lake Boulevard" into "address" field selected by "id"
    And I wait for the response to "@Boulevard"
    And I "see" the "address-suggestion" dropdown suggestions selected by "data-automation" has 5 matching address
    And I select "1 Springfield Lakes Boulevard[^]*SPRINGFIELD LAKES\s*QLD\s*4300" from the "address-suggestion" dropdown suggestions selected by "data-automation"
    And I "see" "1 Springfield Lakes Boulevard[^]*SPRINGFIELD LAKES\s*QLD\s*4300" in the "address" field selected by "id"
    And I click on the "create-account" button selected by "id"
    Then I "should see" the element "accountHeading" with text "Hello oliver" selected by "data-automation" on the page