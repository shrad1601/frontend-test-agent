// Auto-generated characterization test spec — Catalogue
// Generated: 2026-09-29T08:42:57.200Z
// Re-run "npm run generate" to regenerate.

import { test } from '@playwright/test';
import fs from 'fs';

const BASE_URL = "https://books.toscrape.com";
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

test("TC-NAV-001: Load /catalogue/category/books_1/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-001", "Load /catalogue/category/books_1/index.html and record page state", observations);
});

test("TC-LINK-001: Follow link \"Books to Scrape\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-001", "Follow link \"Books to Scrape\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-002: Follow link \"Home\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-002", "Follow link \"Home\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-003: Follow link \"Books\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-003", "Follow link \"Books\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-004: Follow link \"Travel\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-004", "Follow link \"Travel\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-005: Follow link \"Mystery\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-005", "Follow link \"Mystery\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-006: Follow link \"Historical Fiction\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-006", "Follow link \"Historical Fiction\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-007: Follow link \"Sequential Art\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-007", "Follow link \"Sequential Art\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-008: Follow link \"Classics\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-008", "Follow link \"Classics\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-009: Follow link \"Philosophy\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-009", "Follow link \"Philosophy\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-010: Follow link \"Romance\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-010", "Follow link \"Romance\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-011: Follow link \"Womens Fiction\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-011", "Follow link \"Womens Fiction\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-012: Follow link \"Fiction\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-012", "Follow link \"Fiction\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-013: Follow link \"Childrens\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-013", "Follow link \"Childrens\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-014: Follow link \"Religion\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-014", "Follow link \"Religion\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-LINK-015: Follow link \"Nonfiction\" from /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Nonfiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-015", "Follow link \"Nonfiction\" from /catalogue/category/books_1/index.html", observations);
});

test("TC-ERR-001: Observe 1 error(s) on /catalogue/category/books_1/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books_1/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-001", "Observe 1 error(s) on /catalogue/category/books_1/index.html", observations);
});

test("TC-NAV-002: Load /catalogue/category/books/add-a-comment_18/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-002", "Load /catalogue/category/books/add-a-comment_18/index.html and record page state", observations);
});

test("TC-LINK-016: Follow link \"Books to Scrape\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-016", "Follow link \"Books to Scrape\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-017: Follow link \"Home\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-017", "Follow link \"Home\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-018: Follow link \"Books\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-018", "Follow link \"Books\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-019: Follow link \"Travel\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-019", "Follow link \"Travel\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-020: Follow link \"Mystery\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-020", "Follow link \"Mystery\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-021: Follow link \"Historical Fiction\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-021", "Follow link \"Historical Fiction\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-022: Follow link \"Sequential Art\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-022", "Follow link \"Sequential Art\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-023: Follow link \"Classics\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-023", "Follow link \"Classics\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-024: Follow link \"Philosophy\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-024", "Follow link \"Philosophy\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-025: Follow link \"Romance\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-025", "Follow link \"Romance\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-026: Follow link \"Womens Fiction\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-026", "Follow link \"Womens Fiction\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-027: Follow link \"Fiction\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-027", "Follow link \"Fiction\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-028: Follow link \"Childrens\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-028", "Follow link \"Childrens\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-LINK-029: Follow link \"Religion\" from /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-029", "Follow link \"Religion\" from /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-ERR-002: Observe 1 error(s) on /catalogue/category/books/add-a-comment_18/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/add-a-comment_18/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-002", "Observe 1 error(s) on /catalogue/category/books/add-a-comment_18/index.html", observations);
});

test("TC-NAV-003: Load /catalogue/category/books/art_25/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-003", "Load /catalogue/category/books/art_25/index.html and record page state", observations);
});

test("TC-LINK-030: Follow link \"Books to Scrape\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-030", "Follow link \"Books to Scrape\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-031: Follow link \"Home\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-031", "Follow link \"Home\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-032: Follow link \"Books\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-032", "Follow link \"Books\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-033: Follow link \"Travel\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-033", "Follow link \"Travel\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-034: Follow link \"Mystery\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-034", "Follow link \"Mystery\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-035: Follow link \"Historical Fiction\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-035", "Follow link \"Historical Fiction\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-036: Follow link \"Sequential Art\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-036", "Follow link \"Sequential Art\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-037: Follow link \"Classics\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-037", "Follow link \"Classics\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-038: Follow link \"Philosophy\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-038", "Follow link \"Philosophy\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-039: Follow link \"Romance\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-039", "Follow link \"Romance\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-040: Follow link \"Womens Fiction\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-040", "Follow link \"Womens Fiction\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-041: Follow link \"Fiction\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-041", "Follow link \"Fiction\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-042: Follow link \"Childrens\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-042", "Follow link \"Childrens\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-LINK-043: Follow link \"Religion\" from /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-043", "Follow link \"Religion\" from /catalogue/category/books/art_25/index.html", observations);
});

test("TC-ERR-003: Observe 1 error(s) on /catalogue/category/books/art_25/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/art_25/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-003", "Observe 1 error(s) on /catalogue/category/books/art_25/index.html", observations);
});

test("TC-NAV-004: Load /catalogue/category/books/autobiography_27/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-004", "Load /catalogue/category/books/autobiography_27/index.html and record page state", observations);
});

test("TC-LINK-044: Follow link \"Books to Scrape\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-044", "Follow link \"Books to Scrape\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-045: Follow link \"Home\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-045", "Follow link \"Home\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-046: Follow link \"Books\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-046", "Follow link \"Books\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-047: Follow link \"Travel\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-047", "Follow link \"Travel\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-048: Follow link \"Mystery\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-048", "Follow link \"Mystery\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-049: Follow link \"Historical Fiction\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-049", "Follow link \"Historical Fiction\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-050: Follow link \"Sequential Art\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-050", "Follow link \"Sequential Art\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-051: Follow link \"Classics\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-051", "Follow link \"Classics\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-052: Follow link \"Philosophy\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-052", "Follow link \"Philosophy\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-053: Follow link \"Romance\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-053", "Follow link \"Romance\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-054: Follow link \"Womens Fiction\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-054", "Follow link \"Womens Fiction\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-055: Follow link \"Fiction\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-055", "Follow link \"Fiction\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-056: Follow link \"Childrens\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-056", "Follow link \"Childrens\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-LINK-057: Follow link \"Religion\" from /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-057", "Follow link \"Religion\" from /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-ERR-004: Observe 1 error(s) on /catalogue/category/books/autobiography_27/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/autobiography_27/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-004", "Observe 1 error(s) on /catalogue/category/books/autobiography_27/index.html", observations);
});

test("TC-NAV-005: Load /catalogue/category/books/childrens_11/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-005", "Load /catalogue/category/books/childrens_11/index.html and record page state", observations);
});

test("TC-LINK-058: Follow link \"Books to Scrape\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-058", "Follow link \"Books to Scrape\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-059: Follow link \"Home\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-059", "Follow link \"Home\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-060: Follow link \"Books\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-060", "Follow link \"Books\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-061: Follow link \"Travel\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-061", "Follow link \"Travel\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-062: Follow link \"Mystery\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-062", "Follow link \"Mystery\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-063: Follow link \"Historical Fiction\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-063", "Follow link \"Historical Fiction\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-064: Follow link \"Sequential Art\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-064", "Follow link \"Sequential Art\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-065: Follow link \"Classics\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-065", "Follow link \"Classics\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-066: Follow link \"Philosophy\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-066", "Follow link \"Philosophy\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-067: Follow link \"Romance\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-067", "Follow link \"Romance\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-068: Follow link \"Womens Fiction\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-068", "Follow link \"Womens Fiction\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-069: Follow link \"Fiction\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-069", "Follow link \"Fiction\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-070: Follow link \"Childrens\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-070", "Follow link \"Childrens\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-LINK-071: Follow link \"Religion\" from /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-071", "Follow link \"Religion\" from /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-ERR-005: Observe 1 error(s) on /catalogue/category/books/childrens_11/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/childrens_11/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-005", "Observe 1 error(s) on /catalogue/category/books/childrens_11/index.html", observations);
});

test("TC-NAV-006: Load /catalogue/category/books/classics_6/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-006", "Load /catalogue/category/books/classics_6/index.html and record page state", observations);
});

test("TC-LINK-072: Follow link \"Books to Scrape\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-072", "Follow link \"Books to Scrape\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-073: Follow link \"Home\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-073", "Follow link \"Home\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-074: Follow link \"Books\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-074", "Follow link \"Books\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-075: Follow link \"Travel\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-075", "Follow link \"Travel\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-076: Follow link \"Mystery\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-076", "Follow link \"Mystery\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-077: Follow link \"Historical Fiction\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-077", "Follow link \"Historical Fiction\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-078: Follow link \"Sequential Art\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-078", "Follow link \"Sequential Art\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-079: Follow link \"Classics\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-079", "Follow link \"Classics\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-080: Follow link \"Philosophy\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-080", "Follow link \"Philosophy\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-081: Follow link \"Romance\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-081", "Follow link \"Romance\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-082: Follow link \"Womens Fiction\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-082", "Follow link \"Womens Fiction\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-083: Follow link \"Fiction\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-083", "Follow link \"Fiction\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-084: Follow link \"Childrens\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-084", "Follow link \"Childrens\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-LINK-085: Follow link \"Religion\" from /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-085", "Follow link \"Religion\" from /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-ERR-006: Observe 1 error(s) on /catalogue/category/books/classics_6/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/classics_6/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-006", "Observe 1 error(s) on /catalogue/category/books/classics_6/index.html", observations);
});

test("TC-NAV-007: Load /catalogue/category/books/default_15/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-007", "Load /catalogue/category/books/default_15/index.html and record page state", observations);
});

test("TC-LINK-086: Follow link \"Books to Scrape\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-086", "Follow link \"Books to Scrape\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-087: Follow link \"Home\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-087", "Follow link \"Home\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-088: Follow link \"Books\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-088", "Follow link \"Books\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-089: Follow link \"Travel\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-089", "Follow link \"Travel\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-090: Follow link \"Mystery\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-090", "Follow link \"Mystery\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-091: Follow link \"Historical Fiction\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-091", "Follow link \"Historical Fiction\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-092: Follow link \"Sequential Art\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-092", "Follow link \"Sequential Art\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-093: Follow link \"Classics\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-093", "Follow link \"Classics\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-094: Follow link \"Philosophy\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-094", "Follow link \"Philosophy\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-095: Follow link \"Romance\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-095", "Follow link \"Romance\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-096: Follow link \"Womens Fiction\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-096", "Follow link \"Womens Fiction\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-097: Follow link \"Fiction\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-097", "Follow link \"Fiction\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-098: Follow link \"Childrens\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-098", "Follow link \"Childrens\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-LINK-099: Follow link \"Religion\" from /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-099", "Follow link \"Religion\" from /catalogue/category/books/default_15/index.html", observations);
});

test("TC-ERR-007: Observe 1 error(s) on /catalogue/category/books/default_15/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/default_15/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-007", "Observe 1 error(s) on /catalogue/category/books/default_15/index.html", observations);
});

test("TC-NAV-008: Load /catalogue/category/books/fantasy_19/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-008", "Load /catalogue/category/books/fantasy_19/index.html and record page state", observations);
});

test("TC-LINK-100: Follow link \"Books to Scrape\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-100", "Follow link \"Books to Scrape\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-101: Follow link \"Home\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-101", "Follow link \"Home\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-102: Follow link \"Books\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-102", "Follow link \"Books\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-103: Follow link \"Travel\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-103", "Follow link \"Travel\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-104: Follow link \"Mystery\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-104", "Follow link \"Mystery\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-105: Follow link \"Historical Fiction\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-105", "Follow link \"Historical Fiction\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-106: Follow link \"Sequential Art\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-106", "Follow link \"Sequential Art\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-107: Follow link \"Classics\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-107", "Follow link \"Classics\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-108: Follow link \"Philosophy\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-108", "Follow link \"Philosophy\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-109: Follow link \"Romance\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-109", "Follow link \"Romance\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-110: Follow link \"Womens Fiction\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-110", "Follow link \"Womens Fiction\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-111: Follow link \"Fiction\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-111", "Follow link \"Fiction\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-112: Follow link \"Childrens\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-112", "Follow link \"Childrens\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-LINK-113: Follow link \"Religion\" from /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-113", "Follow link \"Religion\" from /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-ERR-008: Observe 1 error(s) on /catalogue/category/books/fantasy_19/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fantasy_19/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-008", "Observe 1 error(s) on /catalogue/category/books/fantasy_19/index.html", observations);
});

test("TC-NAV-009: Load /catalogue/category/books/fiction_10/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-009", "Load /catalogue/category/books/fiction_10/index.html and record page state", observations);
});

test("TC-LINK-114: Follow link \"Books to Scrape\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-114", "Follow link \"Books to Scrape\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-115: Follow link \"Home\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-115", "Follow link \"Home\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-116: Follow link \"Books\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-116", "Follow link \"Books\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-117: Follow link \"Travel\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-117", "Follow link \"Travel\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-118: Follow link \"Mystery\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-118", "Follow link \"Mystery\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-119: Follow link \"Historical Fiction\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-119", "Follow link \"Historical Fiction\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-120: Follow link \"Sequential Art\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-120", "Follow link \"Sequential Art\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-121: Follow link \"Classics\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-121", "Follow link \"Classics\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-122: Follow link \"Philosophy\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-122", "Follow link \"Philosophy\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-123: Follow link \"Romance\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-123", "Follow link \"Romance\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-124: Follow link \"Womens Fiction\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-124", "Follow link \"Womens Fiction\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-125: Follow link \"Fiction\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-125", "Follow link \"Fiction\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-126: Follow link \"Childrens\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-126", "Follow link \"Childrens\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-LINK-127: Follow link \"Religion\" from /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-127", "Follow link \"Religion\" from /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-ERR-009: Observe 1 error(s) on /catalogue/category/books/fiction_10/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/fiction_10/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-009", "Observe 1 error(s) on /catalogue/category/books/fiction_10/index.html", observations);
});

test("TC-NAV-010: Load /catalogue/category/books/historical-fiction_4/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-010", "Load /catalogue/category/books/historical-fiction_4/index.html and record page state", observations);
});

test("TC-LINK-128: Follow link \"Books to Scrape\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-128", "Follow link \"Books to Scrape\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-129: Follow link \"Home\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-129", "Follow link \"Home\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-130: Follow link \"Books\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-130", "Follow link \"Books\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-131: Follow link \"Travel\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-131", "Follow link \"Travel\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-132: Follow link \"Mystery\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-132", "Follow link \"Mystery\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-133: Follow link \"Historical Fiction\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-133", "Follow link \"Historical Fiction\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-134: Follow link \"Sequential Art\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-134", "Follow link \"Sequential Art\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-135: Follow link \"Classics\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-135", "Follow link \"Classics\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-136: Follow link \"Philosophy\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-136", "Follow link \"Philosophy\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-137: Follow link \"Romance\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-137", "Follow link \"Romance\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-138: Follow link \"Womens Fiction\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-138", "Follow link \"Womens Fiction\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-139: Follow link \"Fiction\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-139", "Follow link \"Fiction\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-140: Follow link \"Childrens\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-140", "Follow link \"Childrens\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-LINK-141: Follow link \"Religion\" from /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-141", "Follow link \"Religion\" from /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-ERR-010: Observe 1 error(s) on /catalogue/category/books/historical-fiction_4/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/historical-fiction_4/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-010", "Observe 1 error(s) on /catalogue/category/books/historical-fiction_4/index.html", observations);
});

test("TC-NAV-011: Load /catalogue/category/books/music_14/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-011", "Load /catalogue/category/books/music_14/index.html and record page state", observations);
});

test("TC-LINK-142: Follow link \"Books to Scrape\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-142", "Follow link \"Books to Scrape\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-143: Follow link \"Home\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-143", "Follow link \"Home\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-144: Follow link \"Books\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-144", "Follow link \"Books\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-145: Follow link \"Travel\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-145", "Follow link \"Travel\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-146: Follow link \"Mystery\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-146", "Follow link \"Mystery\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-147: Follow link \"Historical Fiction\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-147", "Follow link \"Historical Fiction\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-148: Follow link \"Sequential Art\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-148", "Follow link \"Sequential Art\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-149: Follow link \"Classics\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-149", "Follow link \"Classics\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-150: Follow link \"Philosophy\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-150", "Follow link \"Philosophy\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-151: Follow link \"Romance\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-151", "Follow link \"Romance\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-152: Follow link \"Womens Fiction\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-152", "Follow link \"Womens Fiction\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-153: Follow link \"Fiction\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-153", "Follow link \"Fiction\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-154: Follow link \"Childrens\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-154", "Follow link \"Childrens\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-LINK-155: Follow link \"Religion\" from /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-155", "Follow link \"Religion\" from /catalogue/category/books/music_14/index.html", observations);
});

test("TC-ERR-011: Observe 1 error(s) on /catalogue/category/books/music_14/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/music_14/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-011", "Observe 1 error(s) on /catalogue/category/books/music_14/index.html", observations);
});

test("TC-NAV-012: Load /catalogue/category/books/mystery_3/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-012", "Load /catalogue/category/books/mystery_3/index.html and record page state", observations);
});

test("TC-LINK-156: Follow link \"Books to Scrape\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-156", "Follow link \"Books to Scrape\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-157: Follow link \"Home\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-157", "Follow link \"Home\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-158: Follow link \"Books\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-158", "Follow link \"Books\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-159: Follow link \"Travel\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-159", "Follow link \"Travel\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-160: Follow link \"Mystery\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-160", "Follow link \"Mystery\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-161: Follow link \"Historical Fiction\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-161", "Follow link \"Historical Fiction\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-162: Follow link \"Sequential Art\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-162", "Follow link \"Sequential Art\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-163: Follow link \"Classics\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-163", "Follow link \"Classics\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-164: Follow link \"Philosophy\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-164", "Follow link \"Philosophy\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-165: Follow link \"Romance\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-165", "Follow link \"Romance\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-166: Follow link \"Womens Fiction\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-166", "Follow link \"Womens Fiction\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-167: Follow link \"Fiction\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-167", "Follow link \"Fiction\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-168: Follow link \"Childrens\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-168", "Follow link \"Childrens\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-LINK-169: Follow link \"Religion\" from /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-169", "Follow link \"Religion\" from /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-ERR-012: Observe 1 error(s) on /catalogue/category/books/mystery_3/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/mystery_3/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-012", "Observe 1 error(s) on /catalogue/category/books/mystery_3/index.html", observations);
});

test("TC-NAV-013: Load /catalogue/category/books/new-adult_20/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-013", "Load /catalogue/category/books/new-adult_20/index.html and record page state", observations);
});

test("TC-LINK-170: Follow link \"Books to Scrape\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-170", "Follow link \"Books to Scrape\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-171: Follow link \"Home\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-171", "Follow link \"Home\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-172: Follow link \"Books\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-172", "Follow link \"Books\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-173: Follow link \"Travel\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-173", "Follow link \"Travel\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-174: Follow link \"Mystery\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-174", "Follow link \"Mystery\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-175: Follow link \"Historical Fiction\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-175", "Follow link \"Historical Fiction\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-176: Follow link \"Sequential Art\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-176", "Follow link \"Sequential Art\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-177: Follow link \"Classics\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-177", "Follow link \"Classics\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-178: Follow link \"Philosophy\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-178", "Follow link \"Philosophy\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-179: Follow link \"Romance\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-179", "Follow link \"Romance\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-180: Follow link \"Womens Fiction\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-180", "Follow link \"Womens Fiction\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-181: Follow link \"Fiction\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-181", "Follow link \"Fiction\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-182: Follow link \"Childrens\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-182", "Follow link \"Childrens\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-LINK-183: Follow link \"Religion\" from /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-183", "Follow link \"Religion\" from /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-ERR-013: Observe 1 error(s) on /catalogue/category/books/new-adult_20/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/new-adult_20/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-013", "Observe 1 error(s) on /catalogue/category/books/new-adult_20/index.html", observations);
});

test("TC-NAV-014: Load /catalogue/category/books/nonfiction_13/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-014", "Load /catalogue/category/books/nonfiction_13/index.html and record page state", observations);
});

test("TC-LINK-184: Follow link \"Books to Scrape\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-184", "Follow link \"Books to Scrape\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-185: Follow link \"Home\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-185", "Follow link \"Home\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-186: Follow link \"Books\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-186", "Follow link \"Books\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-187: Follow link \"Travel\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-187", "Follow link \"Travel\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-188: Follow link \"Mystery\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-188", "Follow link \"Mystery\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-189: Follow link \"Historical Fiction\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-189", "Follow link \"Historical Fiction\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-190: Follow link \"Sequential Art\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-190", "Follow link \"Sequential Art\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-191: Follow link \"Classics\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-191", "Follow link \"Classics\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-192: Follow link \"Philosophy\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-192", "Follow link \"Philosophy\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-193: Follow link \"Romance\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-193", "Follow link \"Romance\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-194: Follow link \"Womens Fiction\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-194", "Follow link \"Womens Fiction\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-195: Follow link \"Fiction\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-195", "Follow link \"Fiction\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-196: Follow link \"Childrens\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-196", "Follow link \"Childrens\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-LINK-197: Follow link \"Religion\" from /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-197", "Follow link \"Religion\" from /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-ERR-014: Observe 1 error(s) on /catalogue/category/books/nonfiction_13/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/nonfiction_13/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-014", "Observe 1 error(s) on /catalogue/category/books/nonfiction_13/index.html", observations);
});

test("TC-NAV-015: Load /catalogue/category/books/paranormal_24/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-015", "Load /catalogue/category/books/paranormal_24/index.html and record page state", observations);
});

test("TC-LINK-198: Follow link \"Books to Scrape\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-198", "Follow link \"Books to Scrape\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-199: Follow link \"Home\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-199", "Follow link \"Home\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-200: Follow link \"Books\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-200", "Follow link \"Books\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-201: Follow link \"Travel\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-201", "Follow link \"Travel\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-202: Follow link \"Mystery\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-202", "Follow link \"Mystery\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-203: Follow link \"Historical Fiction\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-203", "Follow link \"Historical Fiction\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-204: Follow link \"Sequential Art\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-204", "Follow link \"Sequential Art\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-205: Follow link \"Classics\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-205", "Follow link \"Classics\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-206: Follow link \"Philosophy\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-206", "Follow link \"Philosophy\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-207: Follow link \"Romance\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-207", "Follow link \"Romance\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-208: Follow link \"Womens Fiction\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-208", "Follow link \"Womens Fiction\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-209: Follow link \"Fiction\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-209", "Follow link \"Fiction\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-210: Follow link \"Childrens\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-210", "Follow link \"Childrens\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-LINK-211: Follow link \"Religion\" from /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-211", "Follow link \"Religion\" from /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-ERR-015: Observe 1 error(s) on /catalogue/category/books/paranormal_24/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/paranormal_24/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-015", "Observe 1 error(s) on /catalogue/category/books/paranormal_24/index.html", observations);
});

test("TC-NAV-016: Load /catalogue/category/books/parenting_28/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-016", "Load /catalogue/category/books/parenting_28/index.html and record page state", observations);
});

test("TC-LINK-212: Follow link \"Books to Scrape\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-212", "Follow link \"Books to Scrape\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-213: Follow link \"Home\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-213", "Follow link \"Home\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-214: Follow link \"Books\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-214", "Follow link \"Books\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-215: Follow link \"Travel\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-215", "Follow link \"Travel\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-216: Follow link \"Mystery\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-216", "Follow link \"Mystery\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-217: Follow link \"Historical Fiction\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-217", "Follow link \"Historical Fiction\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-218: Follow link \"Sequential Art\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-218", "Follow link \"Sequential Art\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-219: Follow link \"Classics\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-219", "Follow link \"Classics\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-220: Follow link \"Philosophy\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-220", "Follow link \"Philosophy\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-221: Follow link \"Romance\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-221", "Follow link \"Romance\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-222: Follow link \"Womens Fiction\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-222", "Follow link \"Womens Fiction\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-223: Follow link \"Fiction\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-223", "Follow link \"Fiction\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-224: Follow link \"Childrens\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-224", "Follow link \"Childrens\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-LINK-225: Follow link \"Religion\" from /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-225", "Follow link \"Religion\" from /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-ERR-016: Observe 1 error(s) on /catalogue/category/books/parenting_28/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/parenting_28/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-016", "Observe 1 error(s) on /catalogue/category/books/parenting_28/index.html", observations);
});

test("TC-NAV-017: Load /catalogue/category/books/philosophy_7/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-017", "Load /catalogue/category/books/philosophy_7/index.html and record page state", observations);
});

test("TC-LINK-226: Follow link \"Books to Scrape\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-226", "Follow link \"Books to Scrape\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-227: Follow link \"Home\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-227", "Follow link \"Home\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-228: Follow link \"Books\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-228", "Follow link \"Books\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-229: Follow link \"Travel\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-229", "Follow link \"Travel\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-230: Follow link \"Mystery\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-230", "Follow link \"Mystery\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-231: Follow link \"Historical Fiction\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-231", "Follow link \"Historical Fiction\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-232: Follow link \"Sequential Art\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-232", "Follow link \"Sequential Art\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-233: Follow link \"Classics\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-233", "Follow link \"Classics\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-234: Follow link \"Philosophy\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-234", "Follow link \"Philosophy\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-235: Follow link \"Romance\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-235", "Follow link \"Romance\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-236: Follow link \"Womens Fiction\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-236", "Follow link \"Womens Fiction\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-237: Follow link \"Fiction\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-237", "Follow link \"Fiction\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-238: Follow link \"Childrens\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-238", "Follow link \"Childrens\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-LINK-239: Follow link \"Religion\" from /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-239", "Follow link \"Religion\" from /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-ERR-017: Observe 1 error(s) on /catalogue/category/books/philosophy_7/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/philosophy_7/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-017", "Observe 1 error(s) on /catalogue/category/books/philosophy_7/index.html", observations);
});

test("TC-NAV-018: Load /catalogue/category/books/poetry_23/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-018", "Load /catalogue/category/books/poetry_23/index.html and record page state", observations);
});

test("TC-LINK-240: Follow link \"Books to Scrape\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-240", "Follow link \"Books to Scrape\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-241: Follow link \"Home\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-241", "Follow link \"Home\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-242: Follow link \"Books\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-242", "Follow link \"Books\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-243: Follow link \"Travel\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-243", "Follow link \"Travel\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-244: Follow link \"Mystery\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-244", "Follow link \"Mystery\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-245: Follow link \"Historical Fiction\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-245", "Follow link \"Historical Fiction\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-246: Follow link \"Sequential Art\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-246", "Follow link \"Sequential Art\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-247: Follow link \"Classics\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-247", "Follow link \"Classics\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-248: Follow link \"Philosophy\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-248", "Follow link \"Philosophy\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-249: Follow link \"Romance\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-249", "Follow link \"Romance\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-250: Follow link \"Womens Fiction\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-250", "Follow link \"Womens Fiction\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-251: Follow link \"Fiction\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-251", "Follow link \"Fiction\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-252: Follow link \"Childrens\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-252", "Follow link \"Childrens\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-LINK-253: Follow link \"Religion\" from /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-253", "Follow link \"Religion\" from /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-ERR-018: Observe 1 error(s) on /catalogue/category/books/poetry_23/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/poetry_23/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-018", "Observe 1 error(s) on /catalogue/category/books/poetry_23/index.html", observations);
});

test("TC-NAV-019: Load /catalogue/category/books/psychology_26/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-019", "Load /catalogue/category/books/psychology_26/index.html and record page state", observations);
});

test("TC-LINK-254: Follow link \"Books to Scrape\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-254", "Follow link \"Books to Scrape\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-255: Follow link \"Home\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-255", "Follow link \"Home\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-256: Follow link \"Books\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-256", "Follow link \"Books\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-257: Follow link \"Travel\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-257", "Follow link \"Travel\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-258: Follow link \"Mystery\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-258", "Follow link \"Mystery\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-259: Follow link \"Historical Fiction\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-259", "Follow link \"Historical Fiction\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-260: Follow link \"Sequential Art\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-260", "Follow link \"Sequential Art\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-261: Follow link \"Classics\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-261", "Follow link \"Classics\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-262: Follow link \"Philosophy\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-262", "Follow link \"Philosophy\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-263: Follow link \"Romance\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-263", "Follow link \"Romance\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-264: Follow link \"Womens Fiction\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-264", "Follow link \"Womens Fiction\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-265: Follow link \"Fiction\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-265", "Follow link \"Fiction\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-266: Follow link \"Childrens\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-266", "Follow link \"Childrens\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-LINK-267: Follow link \"Religion\" from /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-267", "Follow link \"Religion\" from /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-ERR-019: Observe 1 error(s) on /catalogue/category/books/psychology_26/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/psychology_26/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-019", "Observe 1 error(s) on /catalogue/category/books/psychology_26/index.html", observations);
});

test("TC-NAV-020: Load /catalogue/category/books/religion_12/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-020", "Load /catalogue/category/books/religion_12/index.html and record page state", observations);
});

test("TC-LINK-268: Follow link \"Books to Scrape\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-268", "Follow link \"Books to Scrape\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-269: Follow link \"Home\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-269", "Follow link \"Home\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-270: Follow link \"Books\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-270", "Follow link \"Books\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-271: Follow link \"Travel\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-271", "Follow link \"Travel\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-272: Follow link \"Mystery\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-272", "Follow link \"Mystery\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-273: Follow link \"Historical Fiction\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-273", "Follow link \"Historical Fiction\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-274: Follow link \"Sequential Art\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-274", "Follow link \"Sequential Art\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-275: Follow link \"Classics\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-275", "Follow link \"Classics\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-276: Follow link \"Philosophy\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-276", "Follow link \"Philosophy\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-277: Follow link \"Romance\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-277", "Follow link \"Romance\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-278: Follow link \"Womens Fiction\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-278", "Follow link \"Womens Fiction\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-279: Follow link \"Fiction\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-279", "Follow link \"Fiction\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-280: Follow link \"Childrens\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-280", "Follow link \"Childrens\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-LINK-281: Follow link \"Religion\" from /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-281", "Follow link \"Religion\" from /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-ERR-020: Observe 1 error(s) on /catalogue/category/books/religion_12/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/religion_12/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-020", "Observe 1 error(s) on /catalogue/category/books/religion_12/index.html", observations);
});

test("TC-NAV-021: Load /catalogue/category/books/romance_8/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-021", "Load /catalogue/category/books/romance_8/index.html and record page state", observations);
});

test("TC-LINK-282: Follow link \"Books to Scrape\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-282", "Follow link \"Books to Scrape\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-283: Follow link \"Home\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-283", "Follow link \"Home\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-284: Follow link \"Books\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-284", "Follow link \"Books\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-285: Follow link \"Travel\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-285", "Follow link \"Travel\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-286: Follow link \"Mystery\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-286", "Follow link \"Mystery\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-287: Follow link \"Historical Fiction\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-287", "Follow link \"Historical Fiction\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-288: Follow link \"Sequential Art\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-288", "Follow link \"Sequential Art\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-289: Follow link \"Classics\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-289", "Follow link \"Classics\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-290: Follow link \"Philosophy\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-290", "Follow link \"Philosophy\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-291: Follow link \"Romance\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-291", "Follow link \"Romance\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-292: Follow link \"Womens Fiction\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-292", "Follow link \"Womens Fiction\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-293: Follow link \"Fiction\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-293", "Follow link \"Fiction\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-294: Follow link \"Childrens\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-294", "Follow link \"Childrens\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-LINK-295: Follow link \"Religion\" from /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-295", "Follow link \"Religion\" from /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-ERR-021: Observe 1 error(s) on /catalogue/category/books/romance_8/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/romance_8/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-021", "Observe 1 error(s) on /catalogue/category/books/romance_8/index.html", observations);
});

test("TC-NAV-022: Load /catalogue/category/books/science-fiction_16/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-022", "Load /catalogue/category/books/science-fiction_16/index.html and record page state", observations);
});

test("TC-LINK-296: Follow link \"Books to Scrape\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-296", "Follow link \"Books to Scrape\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-297: Follow link \"Home\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-297", "Follow link \"Home\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-298: Follow link \"Books\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-298", "Follow link \"Books\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-299: Follow link \"Travel\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-299", "Follow link \"Travel\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-300: Follow link \"Mystery\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-300", "Follow link \"Mystery\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-301: Follow link \"Historical Fiction\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-301", "Follow link \"Historical Fiction\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-302: Follow link \"Sequential Art\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-302", "Follow link \"Sequential Art\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-303: Follow link \"Classics\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-303", "Follow link \"Classics\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-304: Follow link \"Philosophy\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-304", "Follow link \"Philosophy\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-305: Follow link \"Romance\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-305", "Follow link \"Romance\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-306: Follow link \"Womens Fiction\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-306", "Follow link \"Womens Fiction\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-307: Follow link \"Fiction\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-307", "Follow link \"Fiction\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-308: Follow link \"Childrens\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-308", "Follow link \"Childrens\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-LINK-309: Follow link \"Religion\" from /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-309", "Follow link \"Religion\" from /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-ERR-022: Observe 1 error(s) on /catalogue/category/books/science-fiction_16/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science-fiction_16/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-022", "Observe 1 error(s) on /catalogue/category/books/science-fiction_16/index.html", observations);
});

test("TC-NAV-023: Load /catalogue/category/books/science_22/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-023", "Load /catalogue/category/books/science_22/index.html and record page state", observations);
});

test("TC-LINK-310: Follow link \"Books to Scrape\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-310", "Follow link \"Books to Scrape\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-311: Follow link \"Home\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-311", "Follow link \"Home\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-312: Follow link \"Books\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-312", "Follow link \"Books\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-313: Follow link \"Travel\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-313", "Follow link \"Travel\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-314: Follow link \"Mystery\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-314", "Follow link \"Mystery\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-315: Follow link \"Historical Fiction\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-315", "Follow link \"Historical Fiction\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-316: Follow link \"Sequential Art\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-316", "Follow link \"Sequential Art\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-317: Follow link \"Classics\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-317", "Follow link \"Classics\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-318: Follow link \"Philosophy\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-318", "Follow link \"Philosophy\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-319: Follow link \"Romance\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-319", "Follow link \"Romance\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-320: Follow link \"Womens Fiction\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-320", "Follow link \"Womens Fiction\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-321: Follow link \"Fiction\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-321", "Follow link \"Fiction\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-322: Follow link \"Childrens\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-322", "Follow link \"Childrens\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-LINK-323: Follow link \"Religion\" from /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-323", "Follow link \"Religion\" from /catalogue/category/books/science_22/index.html", observations);
});

test("TC-ERR-023: Observe 1 error(s) on /catalogue/category/books/science_22/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/science_22/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-023", "Observe 1 error(s) on /catalogue/category/books/science_22/index.html", observations);
});

test("TC-NAV-024: Load /catalogue/category/books/sequential-art_5/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-024", "Load /catalogue/category/books/sequential-art_5/index.html and record page state", observations);
});

test("TC-LINK-324: Follow link \"Books to Scrape\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-324", "Follow link \"Books to Scrape\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-325: Follow link \"Home\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-325", "Follow link \"Home\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-326: Follow link \"Books\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-326", "Follow link \"Books\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-327: Follow link \"Travel\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-327", "Follow link \"Travel\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-328: Follow link \"Mystery\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-328", "Follow link \"Mystery\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-329: Follow link \"Historical Fiction\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-329", "Follow link \"Historical Fiction\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-330: Follow link \"Sequential Art\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-330", "Follow link \"Sequential Art\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-331: Follow link \"Classics\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-331", "Follow link \"Classics\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-332: Follow link \"Philosophy\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-332", "Follow link \"Philosophy\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-333: Follow link \"Romance\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-333", "Follow link \"Romance\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-334: Follow link \"Womens Fiction\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-334", "Follow link \"Womens Fiction\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-335: Follow link \"Fiction\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-335", "Follow link \"Fiction\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-336: Follow link \"Childrens\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-336", "Follow link \"Childrens\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-LINK-337: Follow link \"Religion\" from /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-337", "Follow link \"Religion\" from /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-ERR-024: Observe 1 error(s) on /catalogue/category/books/sequential-art_5/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sequential-art_5/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-024", "Observe 1 error(s) on /catalogue/category/books/sequential-art_5/index.html", observations);
});

test("TC-NAV-025: Load /catalogue/category/books/sports-and-games_17/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-025", "Load /catalogue/category/books/sports-and-games_17/index.html and record page state", observations);
});

test("TC-LINK-338: Follow link \"Books to Scrape\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-338", "Follow link \"Books to Scrape\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-339: Follow link \"Home\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-339", "Follow link \"Home\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-340: Follow link \"Books\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-340", "Follow link \"Books\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-341: Follow link \"Travel\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-341", "Follow link \"Travel\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-342: Follow link \"Mystery\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-342", "Follow link \"Mystery\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-343: Follow link \"Historical Fiction\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-343", "Follow link \"Historical Fiction\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-344: Follow link \"Sequential Art\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-344", "Follow link \"Sequential Art\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-345: Follow link \"Classics\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-345", "Follow link \"Classics\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-346: Follow link \"Philosophy\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-346", "Follow link \"Philosophy\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-347: Follow link \"Romance\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-347", "Follow link \"Romance\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-348: Follow link \"Womens Fiction\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-348", "Follow link \"Womens Fiction\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-349: Follow link \"Fiction\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-349", "Follow link \"Fiction\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-350: Follow link \"Childrens\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-350", "Follow link \"Childrens\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-LINK-351: Follow link \"Religion\" from /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-351", "Follow link \"Religion\" from /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-ERR-025: Observe 1 error(s) on /catalogue/category/books/sports-and-games_17/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/sports-and-games_17/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-025", "Observe 1 error(s) on /catalogue/category/books/sports-and-games_17/index.html", observations);
});

test("TC-NAV-026: Load /catalogue/category/books/travel_2/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-026", "Load /catalogue/category/books/travel_2/index.html and record page state", observations);
});

test("TC-LINK-352: Follow link \"Books to Scrape\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-352", "Follow link \"Books to Scrape\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-353: Follow link \"Home\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-353", "Follow link \"Home\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-354: Follow link \"Books\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-354", "Follow link \"Books\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-355: Follow link \"Travel\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-355", "Follow link \"Travel\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-356: Follow link \"Mystery\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-356", "Follow link \"Mystery\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-357: Follow link \"Historical Fiction\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-357", "Follow link \"Historical Fiction\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-358: Follow link \"Sequential Art\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-358", "Follow link \"Sequential Art\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-359: Follow link \"Classics\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-359", "Follow link \"Classics\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-360: Follow link \"Philosophy\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-360", "Follow link \"Philosophy\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-361: Follow link \"Romance\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-361", "Follow link \"Romance\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-362: Follow link \"Womens Fiction\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-362", "Follow link \"Womens Fiction\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-363: Follow link \"Fiction\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-363", "Follow link \"Fiction\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-364: Follow link \"Childrens\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-364", "Follow link \"Childrens\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-LINK-365: Follow link \"Religion\" from /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-365", "Follow link \"Religion\" from /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-ERR-026: Observe 1 error(s) on /catalogue/category/books/travel_2/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/travel_2/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-026", "Observe 1 error(s) on /catalogue/category/books/travel_2/index.html", observations);
});

test("TC-NAV-027: Load /catalogue/category/books/womens-fiction_9/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-027", "Load /catalogue/category/books/womens-fiction_9/index.html and record page state", observations);
});

test("TC-LINK-366: Follow link \"Books to Scrape\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-366", "Follow link \"Books to Scrape\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-367: Follow link \"Home\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-367", "Follow link \"Home\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-368: Follow link \"Books\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-368", "Follow link \"Books\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-369: Follow link \"Travel\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-369", "Follow link \"Travel\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-370: Follow link \"Mystery\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-370", "Follow link \"Mystery\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-371: Follow link \"Historical Fiction\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-371", "Follow link \"Historical Fiction\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-372: Follow link \"Sequential Art\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-372", "Follow link \"Sequential Art\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-373: Follow link \"Classics\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-373", "Follow link \"Classics\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-374: Follow link \"Philosophy\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-374", "Follow link \"Philosophy\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-375: Follow link \"Romance\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-375", "Follow link \"Romance\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-376: Follow link \"Womens Fiction\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-376", "Follow link \"Womens Fiction\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-377: Follow link \"Fiction\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-377", "Follow link \"Fiction\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-378: Follow link \"Childrens\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-378", "Follow link \"Childrens\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-LINK-379: Follow link \"Religion\" from /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-379", "Follow link \"Religion\" from /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-ERR-027: Observe 1 error(s) on /catalogue/category/books/womens-fiction_9/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/womens-fiction_9/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-027", "Observe 1 error(s) on /catalogue/category/books/womens-fiction_9/index.html", observations);
});

test("TC-NAV-028: Load /catalogue/category/books/young-adult_21/index.html and record page state", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-NAV-028", "Load /catalogue/category/books/young-adult_21/index.html and record page state", observations);
});

test("TC-LINK-380: Follow link \"Books to Scrape\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books to Scrape" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-380", "Follow link \"Books to Scrape\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-381: Follow link \"Home\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Home" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-381", "Follow link \"Home\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-382: Follow link \"Books\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Books" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-382", "Follow link \"Books\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-383: Follow link \"Travel\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Travel" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-383", "Follow link \"Travel\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-384: Follow link \"Mystery\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Mystery" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-384", "Follow link \"Mystery\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-385: Follow link \"Historical Fiction\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Historical Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-385", "Follow link \"Historical Fiction\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-386: Follow link \"Sequential Art\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Sequential Art" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-386", "Follow link \"Sequential Art\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-387: Follow link \"Classics\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Classics" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-387", "Follow link \"Classics\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-388: Follow link \"Philosophy\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Philosophy" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-388", "Follow link \"Philosophy\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-389: Follow link \"Romance\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Romance" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-389", "Follow link \"Romance\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-390: Follow link \"Womens Fiction\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Womens Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-390", "Follow link \"Womens Fiction\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-391: Follow link \"Fiction\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Fiction" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-391", "Follow link \"Fiction\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-392: Follow link \"Childrens\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Childrens" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-392", "Follow link \"Childrens\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-LINK-393: Follow link \"Religion\" from /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
    try {
      await page.getByRole('link', { name: "Religion" }).first().click({ timeout: 3000 });
      await page.waitForTimeout(500);
      observations.afterLinkURL = page.url();
    } catch (e) { observations.linkError = e.message; }
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-LINK-393", "Follow link \"Religion\" from /catalogue/category/books/young-adult_21/index.html", observations);
});

test("TC-ERR-028: Observe 1 error(s) on /catalogue/category/books/young-adult_21/index.html", async ({ page }) => {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));
  page.on('response', res => { if (res.status() >= 400) networkErrors.push({ url: res.url(), status: res.status() }); });

  const observations = {};
  try {
    await page.goto(BASE_URL + "/catalogue/category/books/young-adult_21/index.html", { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    observations.url = page.url();
    observations.title = await page.title();
  } catch (err) {
    observations.fatalError = err.message;
  }

  observations.consoleErrors = consoleErrors;
  observations.networkErrors = networkErrors;
  record("TC-ERR-028", "Observe 1 error(s) on /catalogue/category/books/young-adult_21/index.html", observations);
});
