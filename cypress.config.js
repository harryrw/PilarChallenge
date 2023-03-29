const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/upload-download",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
  },
});
