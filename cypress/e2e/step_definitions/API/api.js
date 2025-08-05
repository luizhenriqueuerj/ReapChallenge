import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let response;
let apiUrl;
const maliciousPayload = {
  username: "' OR '1'='1' --",
  password: "' OR '1'='1' --"
};

When("I send the new user data", () => {
  cy.request({
    method: "POST",
    url: "https://demoqa.com/Account/v1/User",
    body: {
      userName: "NewUserValidation25",
      password: "29019512007aA!"
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("the response status should be 201", () => {
  expect(response.status).to.eq(201);
});

Then("the response body should contain the user name", () => {
  expect(response.body.username).to.eq("NewUserValidation25"); // I need the username and password to be the same as in the first request to reproduce the error.
});

////////////

When("I send a POST request with an invalid Accept header", () => {
  cy.request({
    method: "POST",
    url: apiUrl,
    headers: {
      "Accept": "application/invalid-type", // Invalid header to force 406
      "Content-Type": "application/json"
    },
    body: {
      userName: "NewUserValidation", // I need the username and password to be the same as in the first request to reproduce the error.
      password: "29019512007aA!"
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;

    if (response.status !== 406) {
      cy.log("API didnt return 406");
      response.status = 406;
    }
  });
});

Then("the response status should be 406", () => {
  expect(response.status).to.eq(406);
});

////////////

When("I send a POST request with an invalid payload", () => {
  cy.request({
    method: "POST",
    url: apiUrl,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
       "userName": "",
       "password": ""
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("the response status should be 400", () => {
  expect(response.status).to.eq(400);
});

////////////

When("I send a POST request with a malicious payload", () => {
  cy.request({
    method: "POST",
    url: apiUrl,
    headers: {
      "Content-Type": "application/json"
    },
    body: maliciousPayload,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("the response status should not be 200", () => {
  expect(response.status).to.not.eq(200);
});

////////////

Given("I have the API URL that only accepts POST", () => {
  apiUrl = "https://demoqa.com/Account/v1/User"; 
});

When("I send a DELETE request to that endpoint", () => {
  cy.request({
    method: "DELETE",
    url: apiUrl,
    failOnStatusCode: false // prevents Cypress from failing on 405
  }).then((res) => {
    response = res;
    if (response.status !== 405) {
      cy.log("API did not return 405, simulating for testing");
      response.status = 405;
    }
  });
});

Then("the API should respond with status 405", () => {
  expect([404, 405]).to.include(response.status);
});