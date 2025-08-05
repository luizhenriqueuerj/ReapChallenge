Feature: Login

Scenario: Valid Login
    Given User on the login page
    When User types email address and press Continue
    And User inputs the password and accesses Ramp
    Then User is redirected to a different page to verify their account

Scenario: System should block or alert after multiple failed login attempts
    Given User on the login page
    When I perform several invalid login attempts
    Then the system should display a blocking message or an alert for exceeded attempts