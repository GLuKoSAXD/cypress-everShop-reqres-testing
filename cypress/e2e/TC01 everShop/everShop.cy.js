import register from "../../POM/registPage"; 
import { faker } from "@faker-js/faker";
import login from "../../POM/login";
import dataLogin from "../../fixtures/dataLogin.json"; 
import '@shelex/cypress-allure-plugin';

describe('Authentication (Register and Login)', () => {
  
  beforeEach(() => {
    cy.visit(Cypress.env('urlEvshop'));
  });

  it('should register a new user using faker and save data', () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password({ length: 12 });
     
    register.clickIconAccount(); 
    register.clickButtonRegister(); 
    register.fillRegisterForm(randomName, randomEmail, randomPassword);
    register.clickButtonSignup();

    // menyimpan data faker
    const newUserData = {
      email: randomEmail,
      password: randomPassword
    };
    cy.writeFile('cypress/fixtures/newUser.json', newUserData);
  });

  
  it('should login with the newly created faker user', () => {
    cy.readFile('cypress/fixtures/newUser.json').then((user) => {
      login.clickIconAccount();
      login.clickButtonSignin();   
      cy.login(user.email, user.password);
      cy.wait(1000);
    });
  });



dataLogin.forEach((user) => { 
  it(`should check login behavior for: ${user.email}`, () => {
    login.clickIconAccount();   
    cy.login(user.email, user.password);

    
    cy.wait(5000); // jeda untuk masuk ke url baru atau gagal login


    cy.url().then((currentUrl) => { // buat ngecek url saat ini
      

      if (currentUrl === Cypress.env('urlEvshop')) {
        cy.log('KONDISI: Login Berhasil 🥳🥳');
        cy.wait(1000);
        cy.logout(); // Otomatis lakukan logout jika berhasil
        
      } else {
        cy.log('KONDISI: Login Gagal ❌❌');
      }

    });
  });
});

});
