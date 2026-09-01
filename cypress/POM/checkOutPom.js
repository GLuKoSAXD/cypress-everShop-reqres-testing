class CheckOut {

  // locators
  firstProductElement() {
    return cy.get('[alt="Stainless Steel Thermos - Yellow"]');
  }

  variantYellowButton() {
    return cy.contains('button','Yellow');
  }

  addToCartButton() {
    return cy.get('button').contains('Add to cart');
  }

  checkoutButton() {
    return cy.contains('Checkout');
  }

  emailField() {
    return cy.get('[id="field-contact.email"]');
  }

  fullNameField() {
    return cy.get('[name="shippingAddress.full_name"]');
  }

  telephoneField() {
    return cy.get('[name="shippingAddress.telephone"]');
  }

  address1Field() {
    return cy.get('[name="shippingAddress.address_1"]');
  }

  cityField() {
    return cy.get('[name="shippingAddress.city"]');
  }

  postcodeField() {
    return cy.get('[name="shippingAddress.postcode"]');
  }

  countryDropdown() {
    return cy.get('[id="field-shippingAddress.country"]');
  }

  provinceDropdown() {
    return cy.get('[id="field-shippingAddress.province"]');
  }

  shippingMethodRadio() {
    return cy.get('#shipping-method-c247ab6c-de9c-4906-a903-8c8fc4daef12-label').first();
  }

  continueToPaymentButton() {
    return cy.get('button').contains('Continue to payment');
  }

  paymentMethodCod() {
    return cy.get('#payment-method-cod-label > span.select-none > div.flex');
  }

  orderNoteField() {
    return cy.get('[placeholder="Add a note to your order"]').last();
  }

  placeOrderButton() {
    return cy.get('div.checkout-button-section > button.rounded-md > span.flex');
  }


  // Actions

  selectFirstProduct() {
    this.firstProductElement().click();
  }

  selectVariant() {
    this.variantYellowButton().click();
    cy.wait(2000);
  }

  addToCart() {
    this.addToCartButton().click();
  }

  checkoutFromCart() {
    this.checkoutButton().click();
  }

  fillEmail(email) {
    this.emailField().type(email);
  }

  fillShippingAddress(fullName, telephone, address, city, zip) {
    this.fullNameField().type(fullName);
    this.telephoneField().type(telephone);
    this.address1Field().type(address);
    this.cityField().type(city);
    this.postcodeField().type(zip);
  }

  selectcountry(countryName) {
    this.countryDropdown().click();
    cy.contains(countryName).click();
  }
  
  selectprovince(provinceName) {
    this.provinceDropdown().click();
    cy.contains(provinceName).click();
  }

  selectShippingMethod() {
    this.shippingMethodRadio().should('be.visible').click();
    cy.wait(2000);
  }

  continueToPayment() {
    this.continueToPaymentButton().click();
  }

  selectPaymentMethod() {
    this.paymentMethodCod().click();
  }

  addNoteToOrder(note) {
    this.orderNoteField().type(note); 
  }

  placeOrder() {
    this.placeOrderButton().click();
  }

  verifyOrderSuccess() {
    cy.url().should('include', '/checkout/success');
    cy.contains('Thank you for your order').should('be.visible');
  }
}

export default new CheckOut();