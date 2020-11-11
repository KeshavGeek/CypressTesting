describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/");
    cy.get('body > app-root > div.content > div:nth-child(8) > div:nth-child(2)').click();
  });
});
