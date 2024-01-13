import Manager from "./Manager";
class ManageCustomers extends Manager{
    verifyElementsManageCustomers(){
        //Search Customer
        cy.get('input[ng-model="searchCustomer"]').invoke('attr', 'placeholder')
            .should('contain', 'Search Customer').exist;
        //Customers table
        cy.get(".table").exist;

        //Table headers
        cy.get('td').contains('First Name').exist;
        cy.get('td').contains('Last Name').exist;
        cy.get('td').contains('Post Code').exist;
        cy.get('td').contains('Account Number').exist;
        cy.get('td').contains('Delete Customer').exist;
        
    }
    verifyUser(firstName,lastName,postCode){
        cy.get('input[ng-model="searchCustomer"]').type(firstName);
        cy.get('.table').contains('td',firstName).contains('td',lastName)
            .contains(postCode);
    }

    tableIsEmpty(){
        
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
            cy.get('input[ng-model="fName"]').type(json['firstName']);
            cy.get('input[ng-model="lName"]').type(json['lastName']);
            cy.get('input[ng-model="postCd"]').type(json['postCode']);
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
  
export default ManageCustomers;