describe("navigate to collection and filtering", () => {
  it("should navigate to collection and filter on vehicles", () => {
    cy.wait(2000);
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.wait(3000);
    cy.get('[data-cy="nav_collection"]').click();
    cy.wait(3000);
    cy.get('[data-cy="filter_vehicles"]').click();
    cy.wait(2000);
    cy.url().should(
      "be.equals",
      "http://127.0.0.1:5500/collection.html?filter=vehicles"
    );
  });
});
