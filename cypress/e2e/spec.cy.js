import Login from "../Pages/Login.js";
import Customer from "../Pages/Customer.js";
describe('XYZ Bank', () => {
  const login=new Login();
  const customer=new Customer();
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
    login.goToCustumerLoginPage();
    customer.verifyTittle();
    customer.verifyLabel();
    customer.verifyDefaultUserSelect();
    customer.verifyDisableLoginBtn();
    customer.verifytUserSelectValues();
    customer.verifyEnableLoginBtn();

  })
})