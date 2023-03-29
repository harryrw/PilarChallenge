describe('Download file & validate', () => {
    it('Visit, verify download, open file', () => {
        // Visit page
        cy.visit('https://demoqa.com/upload-download')
        // Click download
        cy.get('#downloadButton')
        .click()
        // Verify file downloads in cypress project download folder
        cy.readFile('cypress/downloads/sampleFile.jpeg')
        // Open downloaded file
        // Verify file opens correctly with no errors
        // Make sure project runs headless with Chrome
    })
})