@regression
@createAccount
@normalProcess

Feature: Sign up today to create your online account and join MYER one.
 
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
    And I type "Springfield lake Boulevard" into "address" field selected by "id"
    And I select "1 Springfield Lakes Boulevard[^]*SPRINGFIELD LAKES\s*QLD\s*4300" from the "address-suggestion" dropdown suggestions selected by "data-automation"
    And I click on the "create-account" button selected by "id"
    Then I "should see" the element "accountHeading" with text "Hello oliver" selected by "data-automation" on the page

    
  
    
