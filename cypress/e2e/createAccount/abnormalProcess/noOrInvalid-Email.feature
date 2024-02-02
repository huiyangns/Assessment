@regression
@createAccount
@abnormalProcess

Feature: User cannot create an online account with incorrect email.

  @retries(1)
  Scenario: Verify error msg without entering a email
    Given I go to myer "join" page
    And I wait to see "Create Account" in the page header
    When I click on the "join" button selected by "id"
    Then I "should see" the element "email-error-text" with text "Please enter a valid email address" selected by "id" on the page
    And I "should see" the text "Email Address" decorated by "error" style

  @retries(1)
  Scenario: Verify error msg after entering an invalid email
    Given I go to myer "join" page
    And I wait to see "Create Account" in the page header
    When I type "1234" into "email" field selected by "id"
    And I click on the "join" button selected by "id"
    Then I "should see" the element "email-error-text" with text "Please enter a valid email address" selected by "id" on the page
    And I "should see" the text "Email Address" decorated by "error" style