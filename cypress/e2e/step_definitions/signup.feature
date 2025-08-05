Feature: Sign-Up

Scenario: Validating Sign-Up
    Given User on Sign-Up Page
    And Complete the fields with your work email address, first name and last name
    When This user's password meets the defined rules
    And Click on 'Start Application'
    Then User is redirected to the 'Verify Email' page

Scenario: Validating e-mail business error
    Given User on Sign-Up Page
    And insert a personal Email Adress
    And Complete the fields with your first name and last name
    When This user's password meets the defined rules
    And Click on 'Start Application'
    Then User receives an error about business email

Scenario: Validating empty First Name
    Given User on Sign-Up Page
    And Complete the fields with email address and last name
    When This user's password meets the defined rules
    And Click on 'Start Application'
    Then User receives an error message indicating that the first name field is empty

Scenario: Validating empty Last Name
    Given User on Sign-Up Page
    And Complete the fields with email address and first name
    When This user's password meets the defined rules
    And Click on 'Start Application'
    Then User receives an error message indicating that the last name field is empty
