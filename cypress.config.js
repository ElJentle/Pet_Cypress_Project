const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs");
const path = require("path");

/*const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = `/cypress/config/cypress.${file}.json`;

  return (
    file &&  fs.readJson(path.join(__dirname, pathOfConfigurationFile))
  )
}*/

/*async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  on('task', {
    checkFolderIsNotEmpty(folderPath) {
      try {
        const files = fs.readdirSync(folderPath);
        return files.length > 0;
      } catch (error) {
        console.error(`Error checking folder: ${folderPath}`, error);
        return false;
      }
    },
    deleteFolder(folderPath) {
      deleteFolderRecursive(folderPath);
      return null;
    }
  });
}*/

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Look for .feature files
    async setupNodeEvents(on, config) {
 // ✅ Initialize cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/e2e/UI_Tests/step_definitions/**/*.js",
      });

      // ✅ Register esbuild bundler for .feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      //registerCypressGrepPlugin(config);
      require('@cypress/grep/src/plugin')(config)

      /*const environment = config.env.configFile || "qa-test"
      var configurationForEnvironment = fetchConfigurationByFile(environment) 

      return configurationForEnvironment, config; */

      const envName = process.env.CYPRESS_ENV || 'qa-test'; // default environment
      const envFilePath = path.resolve(`env_config/${envName}.env.json`);

      if (fs.existsSync(envFilePath)) {
        const envData = JSON.parse(fs.readFileSync(envFilePath, 'utf-8'));
        config.env = { ...config.env, ...envData };
      } else {
        console.warn(`⚠️ Environment file not found: ${envFilePath}`);
      }

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
    video: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    //viewportHeight: 1400,
    //viewportWidth: 1900,
    //numTestsKeptInMemory: 0,
    scrollBehavior: "center", // or 'nearest'
  },
    projectId: "wddr4b"
});
