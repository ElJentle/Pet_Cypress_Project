Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  require('cypress-xpath');

  //Default env in the config is "qa-test" but env can be set in command - e.g. "set CYPRESS_ENV=qa-test && npx cypress run"

  // Run UI test with tags - add "--env tags=@smoke" to cypress command
  //Run API test with tags - add "--env grepTags=@smoke" to cypress command

  //Run specific environment - add "cypress:run:qa-test" to npm run command (npm run cypress:run:qa-test)

  //Run specific UI test file with tag, browser & env - set CYPRESS_ENV=qa-test && npx cypress run --env tags=@smoke --browser chrome --spec "cypress\e2e\UI_Tests\features\google_tests\google_tests.feature"
  //Run specific API test file with tag, browser & env - set CYPRESS_ENV=qa-test && npx cypress run --env tags=@smoke --browser chrome --spec "cypress\e2e\API_Tests\Petstore_test.cy.js"

  // Run all tests in the project - npx cypress run | not recommanded
  // Run all UI test in the project: specify the UI test folder path as "--spec" in the command
  // Run all API test in the project: specify the API test folder path as "--spec" in the command
