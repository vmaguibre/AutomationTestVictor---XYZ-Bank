import Utilities from "../commons/Utilities.js";
const utilities=new Utilities();

class Account{
    constructor(balance){
      this.balance=parseInt(balance);
    }
    verifyAccountNumber(){
      cy.get('#accountSelect').select(0).exist;
    }
    verifyBalance(){
      cy.xpath('//strong[normalize-space()][2]').should('contains.text',this.balance);
      }
    deposit(amount){
      cy.get('form').within(() => {
        cy.get("input[placeholder='amount']").type(amount);
          
        cy.get("button[type='submit']").should('contain.text','Deposit').click();
      })
      if(cy.get("span[class='error ng-binding']").should('contain.text','Deposit Successful')){
        this.balance+=parseInt(amount);
      }
    }
    withdrawl(amount){
      cy.get('form').within(() => {
        cy.get("input[placeholder='amount']")
          .type(amount);
          
        cy.get("button[type='submit']").should('contain.text','Withdraw').click();
      })
      if(cy.get("span[class='error ng-binding']").should('contain.text','Transaction successful')){
        console.log('Yes');
        this.balance-=parseInt(amount);
      }
    }
    failWithdrawl(amount){
      cy.get('form').within(() => {
        cy.get("input[placeholder='amount']")
          .type(amount);
          
        cy.get("button[type='submit']").should('contain.text','Withdraw').click();
      })
      cy.get("span[class='error ng-binding']").should('contain.text','Transaction Failed. You can not withdraw amount more than the balance.')
    }
    goToDeposit(){
      cy.get("button[ng-click='deposit()']").should('contain.text','Deposit\n\t\t\n\t\t')
        .click();
    }
    goToWithdrawl(){
      cy.get("button[ng-click='withdrawl()']").should('contain.text','Withdrawl\n\t\t\n\t\t')
        .click();
    }
    verifytUserSelectValues(){
      utilities.compareJsonElement('userSelect','#userSelect')
    }
    verifyEnableLoginBtn(){
      cy.get('#userSelect').select(1);
      cy.get("button[type='submit']").should('contain.text','Login')
        .not('[disabled]');
    }
    customerLogin(){
      cy.fixture('TestData').then((json) => {
        let fistName=json['firstName'];
        let lastName=json['lastName'];
        cy.get('#userSelect').select(fistName+" "+lastName);
    })
      cy.get("button[type='submit']").should('contain.text','Login')
        .not('[disabled]').click();

    }
    //verifyHomeButton (Verify nav)
  }
  
  export default Account;