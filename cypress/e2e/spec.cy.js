import Login from "../Pages/Login.js";
import Customer from "../Pages/Customer.js";
import AddCustomer from "../Pages/AddCustomer.js";
import Manager from "../Pages/Manager.js";
describe('XYZ Bank', () => {
  const login=new Login();
  const customer=new Customer(); 
  const addCustomer=new AddCustomer(); 
  const manager=new Manager(); 
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
  it.only('CustomerPageTest', ()=>{
    //cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
    login.goToBankManagerLoginPage();
    customer.verifyLabel();
    customer.verifyDefaultUserSelect();
    customer.verifyDisableLoginBtn();
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
})