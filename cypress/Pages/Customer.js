import Utilities from "../commons/Utilities.js";
const utilities=new Utilities();

class Customer{
    verifyTittle(){
      cy.get('.mainHeading').should('contain.text','XYZ Bank');
    }
    verifyLabel(){
      console.log(cy.get('label'));
      utilities.getJsonElement('CustomerPageData','label','label');
      }
    //verifyDefaultUserSelect(){
      //cy.get('#userSelect').should('contain.text','---Your Name---');
    //}
    verifyDefaultUserSelect(){
      cy.get('#userSelect').should('contain.text','---Your Name---');
    }
    verifyDisableLoginBtn(){
        cy.get("button[type='submit']").should('contain.text','Login')
        .not('[enabled]');
    }
    verifyEnableLoginBtn(){
      cy.get('#userSelect').select('Hermoine Granger');
      cy.get("button[type='submit']").should('contain.text','Login')
        .not('[disabled]');
    }
    //verifySelectElements
    //verifyHomeButton (Verify nav)
  }
  
  export default Customer;