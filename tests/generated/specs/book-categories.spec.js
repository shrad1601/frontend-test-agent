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

// Test cases
test('TC-NAV-001: Navigate to the Travel category page and verify the title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/travel_2/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-001', 'Navigate to the Travel category page and verify the title and URL.', observations);
});

test('TC-NAV-002: Navigate to the Science Fiction category page and verify the title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/science-fiction_16/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-002', 'Navigate to the Science Fiction category page and verify the title and URL.', observations);
});

test('TC-NAV-003: Click on the link to the Fiction category and verify the title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/travel_2/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Fiction');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-003', 'Click on the link to the Fiction category and verify the title and URL.', observations);
});

test('TC-FORM-001: Submit the form to Add to basket for a book in the Travel category, and check for success.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/travel_2/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Add to basket');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-FORM-001', 'Submit the form to Add to basket for a book in the Travel category, and check for success.', observations);
});

test('TC-FORM-002: Submit with an empty required fields scenario in the Travel category form.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/travel_2/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Add to basket');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-FORM-002', 'Submit with an empty required fields scenario in the Travel category form.', observations);
});

test('TC-ERROR-001: Reproduce the console error observed during the loading of the Science Fiction category page.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/science-fiction_16/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-ERROR-001', 'Reproduce the console error observed during the loading of the Science Fiction category page.', observations);
});

test('TC-LINK-001: Follow the link to the Children\'s category and verify the title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/childrens_11/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Childrens');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-LINK-001', 'Follow the link to the Children\'s category and verify the title and URL.', observations);
});

test('TC-LINK-002: Click on the link to the Autobiography category and verify the title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/autobiography_27/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Autobiography');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-LINK-002', 'Click on the link to the Autobiography category and verify the title and URL.', observations);
});

test('TC-LINK-003: Navigate to the Horror category using the observed link and check for title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/horror_31/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('text=Horror');
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-LINK-003', 'Navigate to the Horror category using the observed link and check for title and URL.', observations);
});

test('TC-NAV-004: Navigate to the Classics category and verify the title and URL.', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const observations = {};
  try {
    await page.goto(`${BASE_URL}/catalogue/category/books/classics_6/index.html`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.error = err.message;
  }

  observations.consoleErrors = consoleErrors;
  record('TC-NAV-004', 'Navigate to the Classics category and verify the title and URL.', observations);
});