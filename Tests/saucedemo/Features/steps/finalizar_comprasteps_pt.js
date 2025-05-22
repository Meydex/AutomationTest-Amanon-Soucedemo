const { Dado, Quando, Entao, E } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Dado('que estou na página "Finalizar compra"', async function () {
  await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
});

Quando('visualizo as informações e o valor dos produtos', async function () {
  const item_qnt = this.page.locator('[data-test="item-quantity"]');
  await expect(item_qnt).toBeVisible();
  const total = this.page.locator('[data-test="total-label"]');
  await expect(total).toBeVisible();

  const item = this.page.locator('.cart_item');
  await expect(item).toHaveCountGreaterThan(0);

  const totalText = await total.textContent();
  expect(totalText).toMatch(/\$\d+\.\d{2}/);
  const count = await item_qnt.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});

E('clico em "Finalizar"', async function () {
  await this.page.click('[data-test="finish"]')
});

E('clico em "Cancelar"', async function () {
  await this.page.click('[data-test="cancel"]');
});

Entao('sou redirecionado para página de confirmação de compra', async function () {
  await this.page.waitForURL('**/checkout-complete.html');
  expect(this.page.url()).toContain('checkout-complete.html');
});

Entao('sou redirecionado para a página de produtos', async function () {
  await this.page.waitForURL('**/inventory.html');
  expect(this.page.url()).toContain('inventory.html');
});
