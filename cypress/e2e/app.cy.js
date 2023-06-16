/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173')
  })

  it('displays the heading containing Vite + React', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[data-testid="appHeading"]').should('have.text', 'Vite + React')
  })

  it('should increase the count when we click the counter button', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    const countButton = cy.get('[data-testid="countButton"]');
    countButton.click().click().click();
    countButton.should('have.text', 'count is 3');
  })

  it('should show the random user name', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    const randomUserTextEl = cy.get('[data-testid="randomUserText"]');
    randomUserTextEl.should('have.text', 'Random User is Marjorie Graham');
  })
})
