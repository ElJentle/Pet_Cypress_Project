Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  require('cypress-xpath');