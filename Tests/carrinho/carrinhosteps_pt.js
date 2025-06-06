const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página do carrinho', async function () {
  await this.page.goto('https://www.saucedemo.com/cart.html');
});

When('tenho um produto adicionado ao carrinho de compras', async function () {
  const badge = this.page.locator('[data-test="shopping-cart-badge"]');
  await expect(badge).toBeVisible();

  const count = await badge.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});

When('clico em "Remover"', async function () {
  await this.page.click('[data-test="remove-sauce-labs-backpack"]');
});

When('clico em "Checkout"', async function () {
  await this.page.click('[data-test="checkout"]');
});

Then('o produto deve ser removido do carrinho de compras', async function () {
  const produtoremovido = this.page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Backpack' });
  await expect(produtoremovido).toHaveCount(0);
});

Then('devo ser redirecionado para a página "Suas informações"', async function () {
  await this.page.waitForURL('**/checkout-step-one.html');
  expect(this.page.url()).toContain('checkout-step-one.html');
});
