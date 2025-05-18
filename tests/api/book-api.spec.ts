import { test, expect, request } from '@playwright/test';

test('GET all books', async ({ request }) => {
  const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.books.length).toBeGreaterThan(0);
});

test('GET book by ISBN', async ({ request }) => {
  const response = await request.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781449331818');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.title).toBe('Learning JavaScript Design Patterns');
});