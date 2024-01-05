import Login from "../Pages/Login.js";
import Customer from "../Pages/Customer.js";
describe('XYZ Bank', () => {
  const login=new Login();
  const customer=new Customer();

      
    // describe("Reading Data from newly created json file",function()
    // {
    //     it("Sample test case of login", function()
    //     {
    //         cy.visit("http://www.testyou.in/Login.aspx");
    //         cy.fixture('xlsxData').then((user) =>
    //         {
    //             cy.get("input[name='ctl00$CPHContainer$txtUserLogin']").type(user.username)
    //             cy.get("input[name='ctl00$CPHContainer$txtPassword']").type(user.password)
    //         })
    //         cy.wait(2000)      
    //         cy.get("input[name='ctl00$CPHContainer$btnLoginn']").click()
    //     })
    // })
  
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
  it.only('convertExcelToJson', ()=>{
    cy.parseXlsx('cypress/fixtures/excelData.xlsx').then( (jsonData) =>
      { 
        const rowLength = Cypress.$(jsonData[0].data).length
        cy.log(rowLength);
        for (let i = 1; i < rowLength; i++)
          { 
            let value = jsonData[0].data[i]
            cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
            console.log(value[0]);
            cy.writeFile("cypress/fixtures/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
          }
      })
  })
})