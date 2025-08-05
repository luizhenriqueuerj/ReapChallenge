import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given("User on the login page",() => {
    cy.visit("https://app.ramp.com/sign-in")
})

When("User types email address and press Continue",() => {
    cy.get('[type="email"]').clear().type('rosedust02@turkeyth.com')
    cy.get('[type="submit"]').click()
})

And("User inputs the password and accesses Ramp",() => {
    cy.get('[type="password"]').clear().type('26561807007aA.')
    cy.get('[type="submit"]').click()
})

Then("User is redirected to a different page to verify their account",() => {
    cy.contains('button', 'Verify').should('have.text', 'Verify');
})

////

When("I perform several invalid login attempts", () => {
cy.get('[type="email"]').clear().type("anyone02@turkeyth.com");
  for (let i = 0; i < 5; i++) {   
    
    cy.get('[type="submit"]').click()
    cy.get('[type="password"]').clear().type("senha_errada");
    cy.get('[type="submit"]').click();
    cy.wait(500); // brief pause between attempts
  }
});

Then("the system should display a blocking message or an alert for exceeded attempts", () => {
  cy.contains(/Too many failed login attempts. Wait and try again/i, { timeout: 5000 })
    .should("be.visible");
});