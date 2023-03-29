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
    cy.exec("open ./cypress/downloads/sampleFile.jpeg")
      // Verify file opens correctly with no errors
      .its("code")
      .should("eq", 0);
    // Make sure project runs headless with Chrome
    // npx cypress run
  });
});
