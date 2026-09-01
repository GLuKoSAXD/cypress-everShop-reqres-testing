class logOutPage {
  IconAccount() {
    return cy.get('[aria-label="Account"]');
  }

  buttonLogout() {
    return cy.contains('Log out');

  }


  //ACTIONS

    clickIconAccount() {
        this.IconAccount().should('be.visible').click();
    }

    clickButtonLogout() {  
        this.buttonLogout().should('be.visible').click({ force: true });
    }

    
}
export default new logOutPage();