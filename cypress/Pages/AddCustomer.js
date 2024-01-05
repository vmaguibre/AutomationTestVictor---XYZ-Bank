import Manager from "./Manager";
class AddCustomer extends Manager{
    verifyElementsAddCustomer(){
        //First Name
        cy.get("label").should('contain.text','First Name :').exist;
        cy.get('input[ng-model="fName"]').invoke('attr', 'placeholder')
            .should('contain', 'First Name').exist;
        //Last Name
        cy.get("label").should('contain.text','Last Name :').exist;
        cy.get('input[ng-model="lName"]').invoke('attr', 'placeholder')
            .should('contain', 'Last Name').exist;
        //Post Code
        cy.get("label").should('contain.text','Post Code :').exist;
        cy.get('input[ng-model="postCd"]').invoke('attr', 'placeholder')
            .should('contain', 'Post Code').exist;
        //Add Customer Btn
        cy.get("button[type='submit']").should('contain.text','Add Customer')
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
        cy.fixture('TestData').then((json) => {
            //cy.get(locator).should('contain.text',json[property]);
            cy.get('input[ng-model="fName"]').type(json['firstName']);
            cy.get('input[ng-model="lName"]').type(json['lastName']);
            cy.get('input[ng-model="postCd"]').type(json['postCode']);
            // variable= json[property];
            // console.log("Variable: "+ typeof variable)
            // return(this.variable);
          })
        
        this.submitAddCustumerBtn();
        cy.on("window:alert",(x)=>{
            expect(x).to.contains("Customer added successfully with customer id :");
        })
 

        // cy.on('window:alert', (str) => {
        //     expect(str).contains(`Customer added successfully with customer id :`)
        // })
    }

        
}
  
export default AddCustomer;