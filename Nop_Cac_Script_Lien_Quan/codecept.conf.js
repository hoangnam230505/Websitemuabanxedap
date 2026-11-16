/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/auth_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:8080',
      show: process.env.HEADLESS !== 'false' ? false : true,
      waitForNavigation: 'domcontentloaded',
      waitForTimeout: 5000,
    }
  },
  include: {
    I: './steps_file.js'
  },
  noGlobals: true,
  plugins: {},
  name: 'website-mua-ban-xe-dap'
}
