const { defineConfig } = require('cypress');
const { setupDb } = require('./cypress/support/setupDb.js');

module.exports = defineConfig({
	video: false,
	defaultCommandTimeout: 10000,
	chromeWebSecurity: false,
	watchForFileChanges: false,
	viewportWidth: 1920,
	viewportHeight: 1080,
	waitForAnimations: true,
	animationDistanceThreshold: 20,
	execTimeout: 30000,
	taskTimeout: 30000,
	pageLoadTimeout: 30000,
	requestTimeout: 20000,
	responseTimeout: 20000,
	failOnStatusCode: false,
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportDir: 'cypress/results/reports',
		reportPageTitle: 'custom-title',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: true,
		saveHtml: true,
		saveJson: true,
	},
	screenshotsFolder: 'cypress/screenshots',
	screenshotOnRunFailure: true,
	retries: { runMode: 2, openMode: 1 },
	env: {
		url: '',
		login: '',
		pass: '',
	},
	experimentalSourceRewriting: false,
	fixturesFolder: 'cypress/fixtures',
	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
			require('cypress-failed-log/on')(on);
			// on('task', {
			// 	setupDb,
			// });
		},
		excludeSpecPattern: 'testTest.spec.js',
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
		supportFile: './cypress/support/e2e.js',
	},
});
