describe('journey tests', function () {
  it('display search widget and click on second event wich does not have any artists', function () {
    cy.visit('http://localhost:3000/');
    cy.get('.skiddle-c-search').should('be.visible').type('manchester');
    cy.get(
      '.skiddle-c-search-results-container .skiddle-c-event-details .skiddle-u-primary-button'
    )
      .eq(2)
      .click();
    cy.get('.skiddle-u-color-white')
      .should('be.visible')
      .should('contain', 'The Initiation - A Freshers Ritual - Part 1');
  });

  it('display search widget and click on first event wich has artists', function () {
    cy.visit('http://localhost:3000/');
    cy.get('.skiddle-c-search').should('be.visible').type('manchester');
    cy.get(
      '.skiddle-c-search-results-container .skiddle-c-event-details .skiddle-u-primary-button'
    )
      .eq(0)
      .click();
    cy.get('.skiddle-u-color-white')
      .should('be.visible')
      .should(
        'contain',
        'Social Avenue presents Kaluki w/ Archie Hamilton, Ben Sterling'
      );
    cy.get('.skiddle-c-artist-results-container')
      .should('be.visible')
      .children()
      .should('have.length', 3)
      .get('a')
      .eq(1)
      .should('contain', 'Pirate Copy')
      .click()
      .get('.skiddle-c-artist-description')
      .should('contain', 'fifteen years within the industr')
      .go('back')
      .get('.skiddle-c-artist-results-container')
      .should('be.visible')
      .get('a')
      .eq(0)
      .should('contain', 'Archie Hamilton')
      .go('back')
      .get('.skiddle-c-search')
      .should('be.visible');
  });

  it('display no results if event name does not return any results', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.skiddle-c-search')
      .should('be.visible')
      .type('manchesterdsfsdfsdfdsfsdf');
    cy.get('.skiddle-c-search-results-container').should('not.be.visible');
  });
});
