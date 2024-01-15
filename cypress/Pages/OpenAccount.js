import Manager from "./Manager.js";
import Utilities from "../commons/Utilities.js";
const utilities=new Utilities();

class OpenAccount extends Manager{
    
    verifyElementsOpenAccount(){
        //Customer
        cy.get("label").should('contain.text','Customer :').exist;
        cy.get('#userSelect').should('contain.text','---Customer Name---');
        //Currency
        cy.get("label").should('contain.text','Currency :').exist;
        cy.get('#currency').should('contain.text','---Currency---');
        utilities.compareJsonElement('currency','#currency')
        //Process Btn
        cy.get("button[type='submit']").should('contain.text','Process')
            .exist;
    }
    submitProcessBtn(){
        cy.get("button[type='submit']").should('contain.text','Process')
        .click();
    }
    validateUnopenAccount(){
        cy.fixture('TestData').then((json) => {
            let firstName=json['firstName'];
            let lastName=json['lastName'];
            cy.get("div[class='ng-scope']")
                .should('include.text','\n\t\n\t\tHome\n\t\tXYZ Bank\n\t\tLogout\n\t\t\n\t\n\t\n\t Welcome '+firstName+' '+ lastName+' !!\n\tPlease open an account with us.');

        })
    }

    verifyRequiredFields(){
        cy.get("form[name='myForm']").within(() => {
            this.submitProcessBtn();
            let numberOfValidations= 1;
            cy.get('#userSelect').should('have.length', numberOfValidations);
            cy.get('#userSelect').select(1);

            cy.get('#currency').should('have.length', numberOfValidations);
            cy.get('#currency').select(1);
        })
    }
    openAccount(){
        cy.fixture('TestData').then((json) => {
            let firstName=json['firstName'];
            let lastName=json['lastName'];
            cy.get('#userSelect').select(firstName+" "+lastName);
            cy.get('#currency').select(1);
            this.submitProcessBtn();
        })
        cy.on("window:alert",(x)=>{
            expect(x).to.contains("Account created successfully with account Number :");
        })
    }


        
}
  
export default OpenAccount;