class JSON{
    compareJsonElement(path,property,locator){
        cy.fixture(path).then((json) => {
            cy.get(locator).should('contain.text',json[property]);
            // variable= json[property];
            // console.log("Variable: "+ typeof variable)
            // return(this.variable);
          })
    }
    compareJsonListWithArray(path,property,locator){
        cy.fixture(path).then((json) => {
            console.log(json[property]);
            cy.get(locator).invoke('val').should('deep.equal',json[property]);
          })
    }
}

export default JSON;