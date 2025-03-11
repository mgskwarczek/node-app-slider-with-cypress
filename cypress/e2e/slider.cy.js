describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });
});

describe("Swiper Gallery Test", function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });
});

it("Verifies navigation buttons work correctly", function () {
  cy.visit("http://localhost:3000");
  cy.get(".swiper-slide-active h1")
    .invoke("text")
    .then((initialTitle) => {
      cy.wrap(initialTitle).as("storedTitle");
    });
  cy.get(".swiper-button-next").click();
  cy.wait(500);
  cy.get(".swiper-slide-active h1")
    .invoke("text")
    .should("not.equal", Cypress.env("storedTitle"));

  cy.get(".swiper-button-prev").click();
  cy.wait(500);
  cy.get("@storedTitle").then((title) => {
    cy.get(".swiper-slide-active h1").invoke("text").should("equal", title);
  });
});
