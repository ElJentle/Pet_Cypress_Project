const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //registerCypressGrepPlugin(config);
      require('@cypress/grep/src/plugin')(config)

      return config;
    },
    //downloadsFolder: "cypress/downloads",
    //specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    experimentalStudio: true,
    failOnStatusCode: false,
    pageLoadTimeout: 30000,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    //video: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    //viewportHeight: 1400,
    //viewportWidth: 1900,
    //numTestsKeptInMemory: 0,
    scrollBehavior: "center", // or 'nearest'
  },
  projectId: "wddr4b"
  });
