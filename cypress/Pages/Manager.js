import Login from "./Login.js";
class Manager{
    verifyTittle(){
      cy.get('.mainHeading').should('contain.text','XYZ Bank');
    }
    verifyHomeBtn(){
        cy.get('.btn.home').should('contain.text','Home').click();
        const login = new Login();
        login.verifyHomeBtn();
        login.goToBankManagerLoginPage();
      }
    verifyOptions(){
        cy.get('button[ng-click="addCust()"]').should('contain.text','Add Customer');
        cy.get('button[ng-click="openAccount()"]').should('contain.text','Open Account');
        cy.get('button[ng-click="showCust()"]').should('contain.text','Customer')
    }
    goToAddCustomer(){
        cy.get('button[ng-click="addCust()"]').should('contain.text','Add Customer').click();
    }
    goToOpenAccount(){
        cy.get('button[ng-click="openAccount()"]').should('contain.text','Open Account').click();
    }
    goToCustomers(){
        cy.get('button[ng-click="showCust()"]').should('contain.text','Customers').click();
    }
  }
  
  export default Manager;