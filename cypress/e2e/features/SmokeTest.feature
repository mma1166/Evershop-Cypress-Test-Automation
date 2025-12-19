Feature: Smoke Test for Evershop Application

@case1
Scenario: Create a New User Account
Given Open Evershop Account Creation Page
When Insert Full Name
Then Insert Email
Then Insert Password
Then Click on Signup Button

@case2
Scenario: Verify Signin Works with Newly Created Account and Shows My Account Page
Given User is on Login Page
When Insert Login Details
Then Click on Signin Button
Given User is on My Account Page
When User Name is displayed correctly on My Account Page
Then User email is displayed correctly on My Account Page


@case3
Scenario: Add New Address to the Address Book
Given User is on Login Page
When Insert Login Details
Then Click on Signin Button
Given User is on My Account Page
When Add New Address
Then Insert New Address Details
Then Save the New Address

@case4
Scenario: Check Search Functionality
Given User is on Login Page
When Insert Login Details
Then Click on Signin Button
Given Visit Home Page
When Search for a Product
Then Product is displayed in Search Result
Then Click on the Product

@case5
Scenario: Add Product to Cart from Product Page
Given User is on Login Page
When Insert Login Details
Then Click on Signin Button
Given Visit Home Page
When Search for a Product
Then Product is displayed in Search Result
Then Click on the Product
Then Select Product Variant
Then Add the Product to Cart


@Case6
Scenario: Verify Checkout Functionality from Cart
Given User is on Login Page
When Insert Login Details
Then Click on Signin Button
Given Visit Home Page 
Given User is on Shopping Cart Page
Given Checkout item from Shopping Cart
Then Insert Delivary Address Details
Then Insert Shipping Method and Payment Method
Then Place the Order
Then Check Order Confirmation