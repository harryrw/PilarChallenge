describe("Download file & validate", () => {
  it("Visit, verify download, open file", () => {
    // Ignore uncaught exception on page load to fix CORS error
    cy.once("uncaught:exception", () => false);
    // Visit page
    cy.visit("/");
    // Click download
    cy.get("#downloadButton").click({ force: true });
    // Verify file downloads in cypress project download folder
    cy.verifyDownload("sampleFile.jpeg");
    // Open downloaded file
    const cmd =
      Cypress.platform === "win32"
        ? "start ./cypress/downloads/sampleFile.jpeg"
        : "open ./cypress/downloads/sampleFile.jpeg";
    cy.exec(cmd)
      // Verify file opens correctly with no errors
      .its("code")
      .should("eq", 0);
    // Make sure project runs headless with Chrome
    // npx cypress run
  });
});
