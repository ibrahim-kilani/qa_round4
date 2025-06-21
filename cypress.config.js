const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl:"https://magento.softwaretestingboard.com/"
    },
  },
});
