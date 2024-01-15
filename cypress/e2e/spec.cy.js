import Login from "../Pages/Login.js";
import Customer from "../Pages/Customer.js";
import AddCustomer from "../Pages/AddCustomer.js";
import Manager from "../Pages/Manager.js";
import ManagerCustomers from "../Pages/ManageCustomers.js";
import OpenAccount from "../Pages/OpenAccount.js";
import Account from "../Pages/Account.js";
describe('XYZ Bank', () => {
  const login=new Login();
  const customer=new Customer(); 
  const addCustomer=new AddCustomer(); 
  const manager=new Manager(); 
  const manageCustomer=new ManagerCustomers(); 
  const openAccount=new OpenAccount(); 
  const account=new Account(0); 


  beforeEach(()=>{
    cy.visit("/");
  })
  it.only('LoginPageTest', ()=>{
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
    login.goToCustomerLoginPage();
    customer.verifyLabel();
    customer.verifyDefaultUserSelect();
    customer.verifyDisableLoginBtn();
    customer.verifyEnableLoginBtn();

  })

  it.only('ManagerPageTest', ()=>{
    login.goToBankManagerLoginPage();
    manager.verifyTittle
    manager.verifyHomeBtn();
    manager.verifyOptions();
  })
  it.only('AddCustomerPageTest', ()=>{
    login.goToBankManagerLoginPage();
    addCustomer.goToAddCustomer();
    addCustomer.verifyElementsAddCustomer();
    addCustomer.verifyRequiredFields();
  })
  it.only('ManagerCustomersPageTest', ()=>{
    login.goToBankManagerLoginPage();
    manageCustomer.goToCustomers();
    manageCustomer.verifyElementsManageCustomers();
  })
  it.only('OpenAccountPageTest', ()=>{
    login.goToHomePage();
    login.goToBankManagerLoginPage();
    openAccount.goToOpenAccount();
    openAccount.verifyElementsOpenAccount();
    openAccount.verifyRequiredFields();
  })
  it.only('App', ()=>{
    
    //'AddCustomerPageTest'
    login.goToBankManagerLoginPage();
    addCustomer.goToAddCustomer();
    addCustomer.addCustomer();
    //'CustomersPageTest'
    manageCustomer.goToCustomers();
    manageCustomer.validateAddedCustomer();
    //Validate unopen account
    login.goToHomePage();
    login.goToCustomerLoginPage();
    customer.customerLogin();
    openAccount.validateUnopenAccount();
    

    //Open Account
    login.goToHomePage();
    login.goToBankManagerLoginPage();
    openAccount.goToOpenAccount();
    login.goToHomePage();
    login.goToBankManagerLoginPage();
    openAccount.goToOpenAccount();
    openAccount.openAccount();

    //Account
    login.goToHomePage();
    login.goToCustomerLoginPage();
    customer.customerLogin();
    account.verifyAccountNumber();
    account.verifyBalance();

    //Deposit
    account.goToDeposit();
    account.deposit('2000')
    account.verifyBalance();
    //
    
  })
})