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
    submitAddCustumerBtn(){
        cy.get("button[type='submit']").should('contain.text','Add Customer')
        .click();
    }
    verifyRequiredFields(){
        //this.submitAddCustumerBtn();
        cy.get("form[name='myForm']").within(() => {
            this.submitAddCustumerBtn();
            let numberOfValidations= 3;
            cy.get('input:invalid').should('have.length', numberOfValidations)
            cy.get('input[ng-model="fName"]').type(' ')

            cy.get('input:invalid').should('have.length', numberOfValidations-1)
            cy.get('input[ng-model="lName"]').type(' ')

            cy.get('input:invalid').should('have.length', numberOfValidations-2)
            cy.get('input[ng-model="postCd"]').type(' ')
            // this.submitAddCustumerBtn()
            // cy.on("window:alert",(x)=>{
            //     expect(x).to.equal("Please check the details. Customer may be duplicate.");
            // })
  
        })
    }
    validateAddCustomer(){
        let manageCustomers = new ManageCustomers();
        
        cy.fixture('TestData').then((json) => {
            let fistName=json['firstName'];
            let lastName=json['lastName'];
            let postCode=json['postCode'];
            cy.get('input[ng-model="fName"]').type(fistName);
            cy.get('input[ng-model="lName"]').type(lastName);
            cy.get('input[ng-model="postCd"]').type(postCode);
            this.submitAddCustumerBtn();
        })
        
        
        cy.on("window:alert",(x)=>{
            expect(x).to.contains("Customer added successfully with customer id :");
        })
 

        // cy.on('window:alert', (str) => {
        //     expect(str).contains(`Customer added successfully with customer id :`)
        // })
    }

        
}
  
export default OpenAccount;