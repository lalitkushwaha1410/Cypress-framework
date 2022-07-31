const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ca453y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
