class registPage {

    // --- LOCATORS (Hanya untuk mencari dan mengembalikan elemen) ---
    buttonAccount() {
        return cy.get('svg[class="lucide lucide-user h-5 w-5"]');
    }

    buttonRegister() {
        return cy.contains('a','Create an account');
    }

    fieldFullname() {
        return cy.get('#field-full_name');
    }

    fieldEmail() {
        return cy.get('#field-email'); 
    }

    fieldPassword() {
        return cy.get('#field-password');
    }

    btnSignupElement() {
        return cy.contains('Sign Up');
    }

    // --- ACTIONS (Untuk melakukan interaksi dengan elemen di atas) ---
 
    clickIconAccount() {
        this.buttonAccount().should('be.visible').click();
    }

    clickButtonRegister() {
        this.buttonRegister().should('be.visible').click();
    }

    fillRegisterForm(fullname, email, password) {
        // Panggil locator, pastikan terlihat, lalu clear dan ketik nilainya
        this.fieldFullname().should('be.visible').clear().type(fullname);
        this.fieldEmail().should('be.visible').clear().type(email);
        this.fieldPassword().should('be.visible').clear().type(password);
    }   

    clickButtonSignup() {
        // Nama fungsi action harus dibedakan dari nama fungsi locator
        this.btnSignupElement().should('be.visible').click();
    }
}

export default new registPage();