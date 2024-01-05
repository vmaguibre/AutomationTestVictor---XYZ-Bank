import Utilities from "../commons/Utilities.js";
const utilities=new Utilities();

class Customer{
    verifyTittle(){
      cy.get('.mainHeading').should('contain.text','XYZ Bank');
    }
    verifyLabel(){
      //cy.get('.form-group label').should('contain.text',"Your Name :");
      utilities.compareJsonElement('label','.form-group label');
    }
    verifyDisableLoginBtn(){
        cy.get("button[type='submit']").should('contain.text','Login')
        .not('[enabled]');
    }
    verifyDefaultUserSelect(){
      cy.get('#userSelect').should('contain.text','---Your Name---');
    }
    verifytUserSelectValues(){
      utilities.compareJsonElement('userSelect','#userSelect')
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