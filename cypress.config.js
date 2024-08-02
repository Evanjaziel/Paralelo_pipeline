const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cz937d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
