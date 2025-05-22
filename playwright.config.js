
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    headless: false,
    actionTimeout: 0,
    launchOptions:{
        slowMo: 300
    },
    browserName: 'chromium', // 'firefox', 'webkit'
    screenshot: 'only-on-failure',
    video: 'on'
  }
});
