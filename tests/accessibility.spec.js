// tests/accessibility-all-pages.spec.js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';

test('all pages should not have accessibility violations', async ({ page }, testInfo) => {
  const discoveredPages = new Set();
  const queue = ['/'];
  const maxPages = 100;
  const excludedPages = ['404', '404.html'];
  const allViolations = {};
  
  const isExcluded = (path) => excludedPages.some(excluded => path.includes(excluded));
  
  while (queue.length > 0 && discoveredPages.size < maxPages) {
    const pagePath = queue.shift();
    
    if (discoveredPages.has(pagePath) || isExcluded(pagePath)) continue;
    discoveredPages.add(pagePath);
    
    console.log(`Testing: ${pagePath}`);
    
    try {
      await page.goto(pagePath, { waitUntil: 'networkidle' });
      
      const results = await new AxeBuilder({ page }).analyze();
      
      // Store violations for each page
      if (results.violations.length > 0) {
        allViolations[pagePath] = results.violations;
      }
      
      expect(results.violations, `${pagePath} should have no violations`).toEqual([]);
      
      const links = await page.locator('a[href^="/"]').all();
      for (const link of links) {
        const href = await link.getAttribute('href');
        if (href && !href.includes('#') && !discoveredPages.has(href) && !isExcluded(href)) {
          queue.push(href);
        }
      }
    } catch (error) {
      console.error(`Failed to test ${pagePath}: ${error.message}`);
    }
  }
  
  // Export violations to JSON file
  const reportPath = 'accessibility-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(allViolations, null, 2));
  await testInfo.attach('accessibility-violations', {
    path: reportPath,
    contentType: 'application/json',
  });
  
  console.log(`✓ Tested ${discoveredPages.size} pages`);
  console.log(`Report saved to: ${reportPath}`);
});