const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ca453y',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:"cypress/Results/Mochawesome",
    charts: true,
    reportPageTitle: 'Lalit: My Automation Custom Reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
