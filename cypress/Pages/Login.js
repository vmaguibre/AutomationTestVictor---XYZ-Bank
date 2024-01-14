class Login{
  verifyHomeTittle(){
    cy.get('.mainHeading').should('contain.text','XYZ Bank');
  }
  verifyHomeBtn(){
    cy.get('.btn.home').should('contain.text','Home').click();
    this.verifyHomeTittle();
  }
  verifyCustomerLoginBtn(){
    cy.get('button[ng-click="customer()"]').should('contain.text','Customer Login');
  }
  verifyBankManagerLoginBtn(){
    cy.get('button[ng-click="manager()"]').should('contain.text','Bank Manager Login');
  } 
  goToCustomerLoginPage(){
    cy.get('button[ng-click="customer()"]').click();
  }  
  goToBankManagerLoginPage(){
    cy.get('button[ng-click="manager()"]').click();
  }
  
}

export default Login;
