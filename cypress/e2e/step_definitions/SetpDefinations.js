import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Locators from "../../Locators/Locators";
import allData from '../../data/data'
import 'cypress-file-upload';
import 'cypress-iframe';
Cypress.config('defaultCommandTimeout', 3000)
const locators = new Locators();
const data = new allData();

Given("Open Evershop Account Creation Page", () => {
cy.visit("https://demo.evershop.io/account/register")
});

When("Insert Full Name", () => {
  cy.xpath(locators.FullName).type("Muntasir Amit")
});

Then("Insert Email",() =>{
    cy.wait(2000)
    cy.xpath(locators.Email).type("gakib99677@m3player.com")
})

Then("Insert Password",() =>{
    cy.xpath(locators.Password).type("Amit@1234")
})

Then("Click on Signup Button",() =>{
    cy.xpath(locators.SignupButton).click()
})

Given("User is on Login Page", () => {
    cy.visit("https://demo.evershop.io/account/login")
});

When("Insert Login Details", () => {
    cy.xpath(locators.Email).type("gakib99677@m3player.com")
    cy.xpath(locators.Password).type("Amit@1234")
});

Then("Click on Signin Button", () => {
    cy.xpath(locators.SigninButton).click()
});

Given("User is on My Account Page", () => {
    cy.visit("https://demo.evershop.io/account")
    cy.xpath(locators.MyAccountHeader).should('be.visible')
});

When("User Name is displayed correctly on My Account Page", () => {
    cy.xpath(locators.AccountHolderName).should('be.visible')
});
Then("User email is displayed correctly on My Account Page", () => {
    cy.xpath(locators.AccountHolderEmail).should('be.visible')
});

When("Add New Address", () => {
    cy.xpath(locators.NewAddress).click()
});

Then("Insert New Address Details", () => {
    cy.xpath(locators.FullName).type("Muntasir Amit")
    cy.xpath(locators.Telephone).type("0123489009")
    cy.xpath(locators.AddressHome).type("123, Bhuter Goli)")
    cy.xpath(locators.City).type("New York")
    cy.xpath(locators.Country).scrollIntoView().select("United States")
    cy.xpath(locators.State).scrollIntoView().select("New York")
    cy.xpath(locators.PostalCode).type("10001")
    cy.xpath(locators.SetAsDefaultBillingAddress).click()
});

Then("Save the New Address", () => {
    cy.xpath(locators.SaveAddressButton).click()
});

Given("Visit Home Page", () => {
    cy.visit("https://demo.evershop.io/")
});

When("Search for a Product", () => {
    cy.xpath(locators.SearchBoxIcon).click({ force: true })
    cy.xpath(locators.SearchBox).type("Stainless Steel Thermos{enter}")
});

Then("Product is displayed in Search Result", () => {
    cy.xpath(locators.StainlessSteelThermosProduct).should('be.visible')
});

Then("Click on the Product", () => {
    cy.xpath(locators.StainlessSteelThermosProduct).click()
});

Then("Select Product Variant", () => {
    cy.xpath(locators.ThermosColor).click()
    cy.wait(3000)
});

Then("Add the Product to Cart", () => {
    cy.xpath(locators.AddToCartButton).click()
    cy.wait(2000)
    cy.xpath(locators.ViewCartButton).click()
});

Given("User is on Shopping Cart Page", () => {
    cy.xpath(locators.ShoppingCartHeaderIcon).click()
    cy.xpath(locators.ViewCartButton).click()
});

When("Increase Product Quantity", () => {   
    cy.xpath(locators.PlusQuantityButton).click()
});

Then("Verify Two Quantity in Cart", () => {
    cy.xpath(locators.QuantityNumber).should('have.text','2')
});

Then("Verify Total Price for Two Items", () => {
    cy.xpath(locators.TotalPriceForTwo).should('be.visible')
});
When("Decrease Product Quantity", () => {   
    cy.xpath(locators.MinusQuantityButton).click()
});

Then("Verify One Quantity in Cart", () => {
    cy.xpath(locators.QuantityNumber).should('have.text','1')
});     
Then("Verify Total Price for One Item", () => {
    cy.xpath(locators.TotalPriceInitial).should('be.visible')
});

Given("Checkout item from Shopping Cart", () => {
    cy.xpath(locators.CheckoutButton).click()
});

Then("Insert Delivary Address Details", () => {
    cy.wait(2000)
    cy.xpath(locators.DFullName).should('be.visible').type("Muntasir Amit")
    cy.xpath(locators.DTelephone).type("00123489009")
    cy.wait(2000)
    cy.xpath(locators.DAddressHome).type("123, Bhuter Goli)")
    cy.xpath(locators.DCity).type("New York")
    cy.xpath(locators.DCountry).scrollIntoView().select("United States")
    cy.xpath(locators.DProvince).scrollIntoView().select("New York")
    cy.xpath(locators.DPostalCode).type("10001")
});

Then("Insert Shipping Method and Payment Method", () => {
    cy.xpath(locators.ExpressShippingOption).click()
    cy.xpath(locators.CODPaymentOption).click()
});

Then("Place the Order", () => {
    cy.xpath(locators.PlaceOrderButton).should('be.visible')
    cy.wait(2000)
    cy.xpath(locators.PlaceOrderButton)
    .click({ force: true })
});

Then("Check Order Confirmation", () => {
    cy.xpath(locators.ThankYouOrderConfirmation).should('be.visible')
}); 