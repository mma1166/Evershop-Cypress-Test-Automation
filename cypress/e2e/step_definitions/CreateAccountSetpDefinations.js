import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import CreateAccountLocators from "../../Locators/CreateAccountLocators";
import allData from '../../data/data'
import 'cypress-file-upload';
import 'cypress-iframe';
Cypress.config('defaultCommandTimeout', 3000)
const Locators = new CreateAccountLocators();
const data = new allData();

Given("Open Evershop Account Creation Page", () => {
cy.visit("https://demo.evershop.io/account/register")
});

When("Insert Full Name", () => {
  cy.xpath(Locators.FullName).type("Muntasir Amit")
});

Then("Insert Email",() =>{
    cy.wait(2000)
    cy.xpath(Locators.Email).type("pefoc63669@nctime.com")
})

Then("Insert Password",() =>{
    cy.xpath(Locators.Password).type("Amit@1234")
})

Then("Click on Signup Button",() =>{
    cy.xpath(Locators.SignupButton).click()
})

Given("User is on Login Page", () => {
    cy.visit("https://demo.evershop.io/account/login")
});

When("Insert Login Details", () => {
    cy.xpath(Locators.Email).type("pefoc63669@nctime.com")
    cy.xpath(Locators.Password).type("Amit@1234")
});

Then("Click on Signin Button", () => {
    cy.xpath(Locators.SigninButton).click()
});

Given("User is on My Account Page", () => {
    cy.visit("https://demo.evershop.io/account")
    cy.xpath(Locators.MyAccountHeader).should('be.visible')
});

When("User Name is displayed correctly on My Account Page", () => {
    cy.xpath(Locators.AccountHolderName).should('be.visible')
});
Then("User email is displayed correctly on My Account Page", () => {
    cy.xpath(Locators.AccountHolderEmail).should('be.visible')
});

When("Add New Address", () => {
    cy.xpath(Locators.NewAddress).click()
});

Then("Insert New Address Details", () => {
    cy.xpath(Locators.DFullName).type("Muntasir Amit")
    cy.xpath(Locators.DTelephone).type("00123489009")
    cy.xpath(Locators.AddressHome).type("123, Bhuter Goli)")
    cy.xpath(Locators.City).type("New York")
    cy.xpath(Locators.Country).scrollIntoView().select("United States")
    cy.xpath(Locators.State).scrollIntoView().select("New York")
    cy.xpath(Locators.PostalCode).type("10001")
    cy.xpath(Locators.SetAsDefaultBillingAddress).click()
});

Then("Save the New Address", () => {
    cy.xpath(Locators.SaveAddressButton).click()
});

Given("Visit Home Page", () => {
    cy.visit("https://demo.evershop.io/")
});

When("Search for a Product", () => {
    cy.xpath(Locators.SearchBoxIcon).click({ force: true })
    cy.xpath(Locators.SearchBox).type("Stainless Steel Thermos{enter}")
});

Then("Product is displayed in Search Result", () => {
    cy.contains("Stainless Steel Thermos").should('be.visible')
});

Then("Click on the Product", () => {
    cy.contains("Stainless Steel Thermos - Black").click()
});

Then("Select Product Variant", () => {
    cy.xpath(Locators.ThermosColor).click()
});

Then("Add the Product to Cart", () => {
    cy.xpath(Locators.AddToCartButton).click()
    cy.wait(2000)
    cy.xpath(Locators.ViewCartButton).click()
});

Given("User is on Shopping Cart Page", () => {
    cy.xpath(Locators.ShoppingCartHeaderIcon).click()
    cy.xpath(Locators.ViewCartButton).click()
});

When("Increase Product Quantity", () => {   
    cy.xpath(Locators.PlusQuantityButton).click()
});

Then("Verify Two Quantity in Cart", () => {
    cy.xpath(Locators.QuantityNumber).should('have.text','2')
});

Then("Verify Total Price for Two Items", () => {
    cy.xpath(Locators.TotalPriceForTwo).should('be.visible')
});
When("Decrease Product Quantity", () => {   
    cy.xpath(Locators.MinusQuantityButton).click()
});

Then("Verify One Quantity in Cart", () => {
    cy.xpath(Locators.QuantityNumber).should('have.text','1')
});     
Then("Verify Total Price for One Item", () => {
    cy.xpath(Locators.TotalPriceInitial).should('be.visible')
});

Given("Checkout item from Shopping Cart", () => {
    cy.xpath(Locators.CheckoutButton).click()
});

Then("Insert Delivary Address Details", () => {
    cy.wait(2000)
    cy.xpath(Locators.DFullName).should('be.visible').type("Muntasir Amit")
    cy.xpath(Locators.DTelephone).type("00123489009")
    cy.wait(2000)
    cy.xpath(Locators.DAddressHome).type("123, Bhuter Goli)")
    cy.xpath(Locators.DCity).type("New York")
    cy.xpath(Locators.DCountry).scrollIntoView().select("United States")
    cy.xpath(Locators.DProvince).scrollIntoView().select("New York")
    cy.xpath(Locators.DPostalCode).type("10001")
});

Then("Insert Shipping Method and Payment Method", () => {
    cy.xpath(Locators.ExpressShippingOption).click()
    cy.xpath(Locators.CODPaymentOption).click()
});

Then("Place the Order", () => {
    cy.xpath(Locators.PlaceOrderButton).should('be.visible')
    cy.wait(2000)
    cy.xpath(Locators.PlaceOrderButton)
    .click({ force: true })
});

Then("Check Order Confirmation", () => {
    cy.xpath(Locators.ThankYouOrderConfirmation).should('be.visible')
}); 