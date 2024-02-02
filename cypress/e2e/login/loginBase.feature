@regression
@login

Feature: Login to base url
 
  @retries(1)
  Scenario: Login to base url
    Given I go to base url
    # When I login as "Employee"
    # Then I should see the test username on the welcome page
