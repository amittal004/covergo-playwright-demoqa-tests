# Playwright Automation Project - DemoQA

## Overview

This project contains automated tests for the following DemoQA components using Playwright and TypeScript:

- [Practice Form](https://demoqa.com/automation-practice-form)
- [Web Tables](https://demoqa.com/webtables)
- [Bookstore APIs](https://demoqa.com/books)

---

## Project Structure

```
playwright-demoqa-tests/
│
├── tests/
│   ├── ui/        # UI tests for form and table
│   └── api/       # API tests for bookstore
│
├── utils/         # Common utilities and helpers

├── README.md      # Setup and run instructions
├── playwright.config.ts
└── package.json
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/amittal004/covergo-playwright-demoqa-tests.git
cd playwright-demoqa-tests
```

### 2. Install Dependencies

Make sure you have Node.js installed. Then run:

```bash
npm install
```

### 3. Run the Tests

- To run **UI tests**:

```bash
npx playwright test tests/ui
```

- To run **API tests**:

```bash
npx playwright test tests/api
```

---

## Notes

- Playwright Test Runner is used, no Gherkin or keyword-driven frameworks involved.
- Project uses TypeScript and follows SOLID design principles.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js