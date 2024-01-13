import Login from "../Pages/Login.js";
import Customer from "../Pages/Customer.js";
import AddCustomer from "../Pages/AddCustomer.js";
import Manager from "../Pages/Manager.js";
import ManagerCustomers from "../Pages/ManageCustomers.js";
describe('XYZ Bank', () => {
  const login=new Login();
  const customer=new Customer(); 
  const addCustomer=new AddCustomer(); 
  const manager=new Manager(); 
  const manageCustomer=new ManagerCustomers(); 


  beforeEach(()=>{
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
  })
  it.only('LoginPageTest', ()=>{
    //cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
    login.verifyHomeTittle();
    login.verifyHomeBtn();
    login.verifyCustomerLoginBtn();
    login.verifyBankManagerLoginBtn();
  })
  it('convertExcelToJson', ()=>{
    cy.parseXlsx('cypress/fixtures/excelData.xlsx').then( (jsonData) =>
      { 
        const rowLength = Cypress.$(jsonData[0].data).length
        cy.log(rowLength);
        for (let i = 1; i < rowLength; i++)
          { 
            cy.writeFile("cypress/fixtures/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
          }
    })
  })
  it.only('CustomerPageTest', ()=>{
    //cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
    login.goToCustomerLoginPage();
    customer.verifyLabel();
    customer.verifyDefaultUserSelect();
    customer.verifyDisableLoginBtn();
    customer.verifytUserSelectValues();
    customer.verifyEnableLoginBtn();

  })

  it.only('ManagerPageTest', ()=>{
    //cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
    login.goToBankManagerLoginPage();
    manager.verifyTittle
    manager.verifyHomeBtn();
    manager.verifyOptions();

  })
    it.only('AddCustomerPageTest', ()=>{
    //cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
    login.goToBankManagerLoginPage();
    addCustomer.goToAddCustomer();
    addCustomer.verifyElementsAddCustomer();
    addCustomer.verifyRequiredFields();
    addCustomer.validateAddCustomer();

  })
  it.only('CustomersPageTest',()=>{
    login.goToBankManagerLoginPage();
    manageCustomer.goToCustomers();
    manageCustomer.verifyElementsManageCustomers();

  })
})