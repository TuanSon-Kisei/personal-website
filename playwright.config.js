import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 120000,
  use: {
    baseURL: 'http://localhost:1313',
    trace: 'on-first-retry',
    navigationTimeout: 60000,
  },
  webServer: {
    command: '/home/linuxbrew/.linuxbrew/bin/hugo server',
    url: 'http://localhost:1313',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
    env: {
      PATH: `/home/linuxbrew/.linuxbrew/bin:${process.env.PATH}`,
    },
  },
  projects: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    }
  ]
});