const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/upload-download",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
