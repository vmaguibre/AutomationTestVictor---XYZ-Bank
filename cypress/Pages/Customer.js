import Utilities from "../commons/Utilities.js";
const utilities=new Utilities();

class Customer{
    verifyTittle(){
      cy.get('.mainHeading').should('contain.text','XYZ Bank');
    }
    verifyLabel(){
      utilities.compareJsonElement('CustomerPageData','label','label');
    }
    verifyDisableLoginBtn(){
        cy.get("button[type='submit']").should('contain.text','Login')
        .not('[enabled]');
    }
    verifyDefaultUserSelect(){
      cy.get('#userSelect').should('contain.text','---Your Name---');
    }
    verifytUserSelectValues(){
      utilities.compareJsonElement('CustomerPageData','userSelect','#userSelect')
    }
    // verifyEnableLoginBtn(){
    //   cy.get('#userSelect').select('Hermoine Granger');
    //   cy.get("button[type='submit']").should('contain.text','Login')
    //     .not('[disabled]');
    // }
    verifyEnableLoginBtn(){
      cy.get('#userSelect').select(1);
      cy.get("button[type='submit']").should('contain.text','Login')
        .not('[disabled]');
    }
    //verifyHomeButton (Verify nav)
  }
  
  export default Customer;