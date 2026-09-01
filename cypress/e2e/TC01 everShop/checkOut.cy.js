import checkOut from "../../POM/checkOutPom"; // Import file checkOut.js
import personalInfo from "../../fixtures/pesonalInfo.json";
import login from "../../POM/login";
import user from "../../fixtures/newUser.json";
import '@shelex/cypress-allure-plugin';

describe('Checkout Scenarios', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('urlEvshop'));
  });

  it('should checkout successfully WITHOUT login (Guest Checkout)', () => {
    cy.intercept('POST', '/api/graphql').as('submitOrder'); //buat nunggu load api nya selesai dulu baru lanjut
      checkOut.selectFirstProduct();
      checkOut.selectVariant();
      checkOut.addToCart();
      checkOut.checkoutFromCart();
      checkOut.fillEmail(personalInfo.email);
      checkOut.fillShippingAddress(personalInfo.fullname, personalInfo.telephone, personalInfo.address, personalInfo.city, personalInfo.zip);
      checkOut.selectcountry(personalInfo.country);
      checkOut.selectprovince(personalInfo.province);
      checkOut.selectShippingMethod();
      checkOut.selectPaymentMethod();
      checkOut.addNoteToOrder(personalInfo.note);
      checkOut.placeOrder();
      cy.wait('@submitOrder');
      checkOut.verifyOrderSuccess();
      
  });

  it('should checkout successfully WITH login', () => { 
    cy.intercept('POST', '/api/graphql').as('submitOrder');
      login.clickIconAccount();
      login.clickButtonSignin();   
      cy.login(user.email, user.password);
      cy.wait(2000); // Menunggu 2 detik sebelum melanjutkan ke langkah berikutnya
      checkOut.selectFirstProduct();
      checkOut.selectVariant();
      checkOut.addToCart();
      checkOut.checkoutFromCart();
      checkOut.fillShippingAddress(personalInfo.fullname, personalInfo.telephone, personalInfo.address, personalInfo.city, personalInfo.zip);
      checkOut.selectcountry(personalInfo.country);
      checkOut.selectprovince(personalInfo.province);
      checkOut.selectShippingMethod();
      checkOut.selectPaymentMethod();
      checkOut.addNoteToOrder(personalInfo.note);
      checkOut.placeOrder();
      cy.wait('@submitOrder');
      checkOut.verifyOrderSuccess();



  }); 


});