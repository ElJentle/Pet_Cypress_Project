Feature: Search functionality

  
        Scenario: Verify search input field supports auto suggestion
            Given the user is on google home page
             When the user types into the search field
             Then applicable auto suggestions are displayed
