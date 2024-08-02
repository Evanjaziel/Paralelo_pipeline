const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cz937d',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
