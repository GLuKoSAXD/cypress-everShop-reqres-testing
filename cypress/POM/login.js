class loginpage {

    // LOCATORS
    buttonaccount() {
        return cy.get('svg[class="lucide lucide-user h-5 w-5"]');
    }


    buttonSignin() {
        return cy.contains('button','Sign In');
    }

    fieldEmail() {
        return cy.get('#field-email'); 
    }

    fieldPassword() {
        return cy.get('#field-password');
    }

    buttonlogout() {
        return cy.contains('Log out');
    }


    // ACTIONS 
    clickButtonLogout() {
        // Panggil fungsi locator menggunakan "this."
        this.buttonlogout().should('be.visible').click();
    }
 
    clickIconAccount() {
        this.buttonaccount().should('be.visible').click();
    }

    clickButtonSignin() {
        this.buttonSignin().should('be.visible').click();
    }

    // fillLoginForm(email, password) {
    //     this.fieldEmail().should('be.visible').clear().type(email);
    //     this.fieldPassword().should('be.visible').clear().type(password);
    // }   

    clickButtonSignup() {
        // Nama fungsi action harus dibedakan dari nama fungsi locator
        this.btnSignupElement().should('be.visible').click();
    }
}

export default new loginpage();