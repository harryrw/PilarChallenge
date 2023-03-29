describe("Download file & validate", () => {
  it("Visit, verify download, open file", () => {
    // Ignore uncaught exception on page load to fix CORS error
    cy.once("uncaught:exception", () => false);
    // Visit page
    cy.visit("/");
    // Click download
    cy.clickDownload("#downloadButton");
    cy.get("@fileName").then(($fileName) => {
      // Verify file downloads in cypress project download folder
      cy.verifyDownload($fileName);
      // Open downloaded file
      // Verify file opens correctly with no errors
      cy.verifyFileOpens(`./cypress/downloads/${$fileName}`);
    });
    // Make sure project runs headless with Chrome
  });
});
