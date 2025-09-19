const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
//const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs");
const path = require("path");


module.exports = defineConfig({

    reporter: "cypress-mochawesome-reporter", // add reporter
    video: true,
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome-report",
      overwrite: true,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: "WemaBank Cypress Automation Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },

  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.js", 
      // Look for .feature files
      "cypress/e2e/**/*.feature"
    ], 
    
    async setupNodeEvents(on, config) {
 // ✅ Initialize cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config, {
      }); 

      // ✅ Register esbuild bundler for .feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Enable tag filtering
      config.env.filterSpecs = true;
      config.env.omitFiltered = true;

      //registerCypressGrepPlugin(config);
      require('@cypress/grep/src/plugin')(config)

      const envName = (process.env.CYPRESS_ENV || 'qa-test').trim(); // default environment
      const envFilePath = path.resolve(`env_config/${envName}.env.json`);

      if (fs.existsSync(envFilePath)) {
        const envData = JSON.parse(fs.readFileSync(envFilePath, 'utf-8'));
        config.env = { ...config.env, ...envData };
      } else {
        console.warn(`⚠️ Environment file not found: ${envFilePath}`);
      }

      // add reporter plugin
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
    //downloadsFolder: "cypress/downloads",
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    experimentalStudio: true,
    failOnStatusCode: false,
    pageLoadTimeout: 30000,
    watchForFileChanges: false, 
    experimentalRunAllSpecs: true,
    video: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    //viewportHeight: 1400,
    //viewportWidth: 1900,
    //numTestsKeptInMemory: 0,
    scrollBehavior: "center", // or 'nearest'
  },
    projectId: "wddr4b"
});
