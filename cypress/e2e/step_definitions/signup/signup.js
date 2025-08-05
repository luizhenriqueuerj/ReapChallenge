import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given("User on Sign-Up Page",() => {
    cy.visit("https://app.ramp.com/sign-up")
})

And("Complete the fields with your work email address, first name and last name",() => {
    cy.get('[type="email"]').clear().type('anothername90@turkeyth.com') //Will be necessary change this email before run the test
    cy.get('input[name="first_name"]').type('Bobbie')
    cy.get('input[name="last_name"]').type('Bob')
       
})

And("insert a personal Email Adress",() => {
    cy.get('[type="email"]').clear().type('anothername9@gmail.com') //Will be necessary change this email before run the test
})

And("Complete the fields with your first name and last name",() => {
    cy.get('input[name="first_name"]').type('Bobbie')
    cy.get('input[name="last_name"]').type('Bob')
})

And("Click on 'Start Application'",() => {
    cy.get('[type="submit"]').click()
})

And("Complete the fields with email address and last name",() => {
    cy.get('[type="email"]').clear().type('anothername200@turkeyth.com')
    cy.get('input[name="last_name"]').type('Bob');
})

And("Complete the fields with email address and first name",() => {
    cy.get('[type="email"]').clear().type('anothername200@turkeyth.com')
    cy.get('input[name="first_name"]').type('Bob');
})

When("This user's password meets the defined rules",() => {
    cy.get('[type="password"]').clear().type('26561807007aA.')  
})


Then("User is redirected to the 'Verify Email' page",() => {
    cy.contains('h3', 'Verify').should('have.text', 'Verify your email');
})

Then("User receives an error about business email",() => {
    cy.get('[id*="«r6»"]')
    .contains('business')
})

Then("User receives an error message indicating that the first name field is empty",() => {
    cy.get('[id*="«rd»"]')
    .contains('required')
})

Then("User receives an error message indicating that the last name field is empty",() => {
    cy.get('[id*="«rk»"]')
    .contains('required')
})