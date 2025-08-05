Feature: API

Scenario: Successfully create a new user
  Given I have the API URL that only accepts POST
  When I send the new user data
  Then the response status should be 201
  And the response body should contain the user name

Scenario: API returns error 406 when the Accept header is invalid on POST
  Given I have the API URL that only accepts POST
  When I send a POST request with an invalid Accept header
  Then the response status should be 406

Scenario: API returns error 400 when the payload is invalid
  Given I have the API URL that only accepts POST
  When I send a POST request with an invalid payload
  Then the response status should be 400

Scenario: API must block SQL Injection attempts
  Given I have the API URL that only accepts POST
  When I send a POST request with a malicious payload
  Then the response status should not be 200

Scenario: API returns 405 when using DELETE on an endpoint that only accepts POST
  Given I have the API URL that only accepts POST
  When I send a DELETE request to that endpoint
  Then the API should respond with status 405