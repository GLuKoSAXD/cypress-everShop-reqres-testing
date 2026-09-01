import registerPage from '../POM/registPage.js';
import loginPage from '../POM/login.js';
import logOutPage from '../POM/logOut.js';

Cypress.Commands.add('register', () => {
    cy.fixture('dataregist').then((data) => {
        registerPage.fieldFullname().type(data.fullname);
        registerPage.fieldEmail().type(data.email);
        registerPage.fieldPassword().type(data.password);
        registerPage.btnSignupElement().click();
    });
});


Cypress.Commands.add('login', (email, password) => {
    loginPage.fieldEmail().type(email);
    loginPage.fieldPassword().type(password);
    loginPage.clickButtonSignin();
    
});

Cypress.Commands.add('logout', () => {
    logOutPage.clickIconAccount();
    logOutPage.clickButtonLogout();
}); 