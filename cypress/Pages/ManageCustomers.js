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
        cy.get('input[ng-model="searchCustomer"]').clear().type(firstName);
        cy.get('.table').contains('td',firstName);
        cy.get('.table').contains('td',lastName);
        cy.get('.table').contains('td',postCode);
            
    }
    deleteUser(){
        cy.fixture('TestData').then((json) => {
            cy.get('input[ng-model="searchCustomer"]').clear().type(json['firstName']);
          })
        cy.get('button[ng-click="deleteCust(cust)"]').click();
    
    }
    
    submitAddCustumerBtn(){
        cy.get("button[type='submit']").should('contain.text','Add Customer')
        .click();
    }
    verifyRequiredFields(){
        cy.get("form[name='myForm']").within(() => {
            this.submitAddCustumerBtn();
            let numberOfValidations= 3;
            cy.get('input:invalid').should('have.length', numberOfValidations)
            cy.get('input[ng-model="fName"]').type(' ')

            cy.get('input:invalid').should('have.length', numberOfValidations-1)
            cy.get('input[ng-model="lName"]').type(' ')

            cy.get('input:invalid').should('have.length', numberOfValidations-2)
            cy.get('input[ng-model="postCd"]').type(' ')
        })
    }
    validateAddedCustomer(){
        cy.fixture('TestData').then((json) => {
            this.verifyUser(json['firstName'],json['lastName'],json['postCode']);
          })
    }

        
}
  
export default ManageCustomers;