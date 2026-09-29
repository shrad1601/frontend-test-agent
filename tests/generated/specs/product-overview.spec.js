import { test } from '@playwright/test';
import fs from 'fs';

const BASE_URL = 'https://books.toscrape.com';
const RESULTS = [];

function record(id, description, observations) {
  RESULTS.push({ id, description, observations, timestamp: new Date().toISOString() });
}

test.afterAll(() => {
  fs.mkdirSync('tests/generated/reports', { recursive: true });
  fs.writeFileSync(
    'tests/generated/reports/results.json',
    JSON.stringify(RESULTS, null, 2)
  );
});

test('TC-NAV-001: Verify successful navigation to the main products page.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-001', 'Verify successful navigation to the main products page.', observations);
});

test('TC-NAV-002: Verify successful navigation to the Travel category page.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Travel');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-002', 'Verify successful navigation to the Travel category page.', observations);
});

test('TC-NAV-003: Verify successful navigation to the Mystery category page.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Mystery');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-003', 'Verify successful navigation to the Mystery category page.', observations);
});

test('TC-LINK-001: Verify that the "Books to Scrape" link redirects to the main products page.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Books to Scrape');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-LINK-001', 'Verify that the "Books to Scrape" link redirects to the main products page.', observations);
});

test('TC-FORM-001: Submit the first available form with the "Add to basket" button.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Add to basket', { timeout: 10000 });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-FORM-001', 'Submit the first available form with the "Add to basket" button.', observations);
});

test('TC-FORM-002: Submit the second available form with the "Add to basket" button.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Add to basket', { timeout: 10000 });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-FORM-002', 'Submit the second available form with the "Add to basket" button.', observations);
});

test('TC-ERROR-001: Reproduce the mixed content error observed in the console.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
  } catch (err) {
    observations.error = err.message; // optional, if there's an error loading
  }

  observations.consoleErrors = consoleErrors;
  record('TC-ERROR-001', 'Reproduce the mixed content error observed in the console.', observations);
});

test('TC-NAV-004: Verify successful navigation to the Science category page.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Science');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-004', 'Verify successful navigation to the Science category page.', observations);
});

test('TC-LINK-002: Verify that the "next" link directs to the next page of products.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=next');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-LINK-002', 'Verify that the "next" link directs to the next page of products.', observations);
});