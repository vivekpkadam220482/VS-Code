# Visual Testing Demo with Playwright and Applitools Eyes

This project demonstrates automated visual testing using Playwright and Applitools Eyes. It includes a sample web page with a theme toggle feature and shows how to perform visual regression testing across different browsers and viewport sizes.

## Features

- Visual regression testing with Applitools Eyes
- Cross-browser testing using Visual Grid Runner
- Responsive design testing with multiple viewport sizes
- Theme toggle functionality testing
- TypeScript implementation
- Automated test reporting

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- A free Applitools account and API key

## Project Structure

```
├── src/
│   ├── test-page.html      # Sample webpage with theme toggle
│   └── visual.test.ts      # Visual regression tests
├── package.json            # Project dependencies and scripts
├── playwright.config.ts    # Playwright configuration
└── tsconfig.json          # TypeScript configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vivekpkadam220482/VS-Code.git
   cd VS-Code
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Configuration

1. Sign up for a free Applitools account at https://applitools.com/
2. Get your API key from the Applitools dashboard
3. Set your API key in one of these ways:

   - As an environment variable:
     ```bash
     # Windows PowerShell
     $env:APPLITOOLS_API_KEY="your-api-key"
     
     # Windows Command Prompt
     set APPLITOOLS_API_KEY=your-api-key
     ```

   - Update the package.json script (not recommended for production):
     ```json
     "test:visual": "cross-env APPLITOOLS_API_KEY=\"your-api-key\" playwright test"
     ```

## Running Tests

Run the visual tests:
```bash
npm run test:visual
```

The tests will:
1. Open the sample page
2. Take a baseline screenshot
3. Toggle the theme
4. Take a comparison screenshot
5. Compare both states using Applitools Eyes

## Test Configuration

The tests are configured to run on multiple browsers and viewport sizes:
- Chrome (800x600)
- Firefox (1200x800)
- Safari (1600x1200)

You can modify these configurations in `src/visual.test.ts`.

## Sample Web Page

The sample page (`src/test-page.html`) includes:
- A responsive header
- A styled container
- A theme toggle button
- Dark/light theme support
- CSS transitions

## Visual Testing Features

- **Initial State Check**: Captures the baseline appearance
- **Theme Toggle**: Verifies visual changes after theme switch
- **Cross-browser Testing**: Ensures consistency across browsers
- **Responsive Design**: Tests multiple viewport sizes
- **Full Page Screenshots**: Captures entire page content

## Viewing Test Results

1. Log in to your [Applitools dashboard](https://eyes.applitools.com/)
2. Navigate to the test results
3. View baseline and comparison screenshots
4. Check visual differences (if any)
5. Approve or reject changes

## Best Practices

- Keep the API key secure and never commit it to version control
- Use descriptive test and checkpoint names
- Add appropriate waits for animations/transitions
- Handle test cleanup in finally blocks
- Use multiple viewport sizes for responsive testing

## Troubleshooting

1. **API Key Issues**:
   - Ensure the API key is properly set
   - Check for extra spaces or special characters
   - Verify the key is valid in your Applitools dashboard

2. **Test Failures**:
   - Check the Applitools dashboard for visual differences
   - Verify the test page loads correctly
   - Ensure all selectors are correct
   - Check for animation completion before captures

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.
