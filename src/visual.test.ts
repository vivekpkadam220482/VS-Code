import { test } from '@playwright/test';
import { Eyes, Target, VisualGridRunner, Configuration, BrowserType } from '@applitools/eyes-playwright';
import path from 'path';

test.describe('Visual Testing Demo', () => {
    let eyes: Eyes;
    const runner = new VisualGridRunner({ testConcurrency: 5 });

    test.beforeEach(async ({ page }) => {
        // Initialize Eyes
        eyes = new Eyes(runner);
        
        // Configure Eyes
        const configuration = new Configuration();
        configuration.setAppName('Visual Testing Demo');
        configuration.setTestName(test.info().title);
        
        // Add multiple browser configurations for cross-browser testing
        configuration.addBrowser(800, 600, BrowserType.CHROME);
        configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
        configuration.addBrowser(1600, 1200, BrowserType.SAFARI);
        
        // Set your Applitools API key
        const apiKey = process.env.APPLITOOLS_API_KEY?.trim() || '';
        if (!apiKey) {
            throw new Error('APPLITOOLS_API_KEY environment variable is required');
        }
        configuration.setApiKey(apiKey);
        
        await eyes.setConfiguration(configuration);
    });

    test('GitHub Copilot Visual test with theme toggle', async ({ page }) => {
        // Start the test
        await eyes.open(page);

        try {
            // Navigate to the test page
            await page.goto(`file://${path.join(__dirname, 'test-page.html')}`);
            
            // Check the initial state
            await eyes.check('Initial Page Load', Target.window().fully());
            
            // Click the theme toggle button
            await page.click('#themeToggle');
            
            // Small wait to ensure transition completes
            await page.waitForTimeout(500);
            
            // Check the dark theme state
            await eyes.check('After Theme Toggle', Target.window().fully());
            
            // Close Eyes
            await eyes.close(false);
        } finally {
            // If the test was aborted before eyes.close was called
            await eyes.abortIfNotClosed();
        }
    });

    test.afterAll(async () => {
        // Get and log the results
        const results = await runner.getAllTestResults();
        console.log(results);
    });
});
