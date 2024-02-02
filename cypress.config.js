const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  fixturesFolder: 'fixtures',
  downloadsFolder: 'downloads',
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  defaultCommandTimeout: 10000,
  responseTimeout: 35000,
  requestTimeout: 30000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  video: false,
  numTestsKeptInMemory: 1,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  experimentalSourceRewriting: false,

  e2e: {
    baseUrl: 'https://cypress-au-enterprise-devops-v3.myqa.simprosuite.com',
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {

      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
})
