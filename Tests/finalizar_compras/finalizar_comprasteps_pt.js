const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página "Finalizar compra"', async function () {
  await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
});

When('visualizo as informações e o valor dos produtos', async function () {
  const item_qnt = this.page.locator('[data-test="item-quantity"]');
  await expect(item_qnt).toBeVisible();
  const total = this.page.locator('[data-test="total-label"]');
  await expect(total).toBeVisible();

  const item = this.page.locator('.cart_item');
  const itemCount = await item.count();
  expect(itemCount).toBeGreaterThan(0);
  
  const totalText = await total.textContent();
  expect(totalText).toMatch(/\$\d+\.\d{2}/);
  const count = await item_qnt.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});

When('clico em "Finalizar"', async function () {
  await this.page.click('[data-test="finish"]')
});

When('clico em "Cancelar"', async function () {
  await this.page.click('[data-test="cancel"]');
});

Then('sou redirecionado para página de confirmação de compra', async function () {
  await this.page.waitForURL('**/checkout-complete.html');
  expect(this.page.url()).toContain('checkout-complete.html');
});

Then('sou redirecionado para a página de produtos', async function () {
  await this.page.waitForURL('**/inventory.html');
  expect(this.page.url()).toContain('inventory.html');
});
