const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig( {
  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on("task", {parseXlsx({ filePath }) {
            return new Promise((resolve, reject) => {
              try {
                const jsonData = xlsx.parse(fs.readFileSync(filePath));
                resolve(jsonData);
              } catch (e) {
                reject(e);
              }
            });
        }});
  }
  }
});

