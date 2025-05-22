const { Dado, Quando, Entao, E } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Dado('que estou na página de produtos', async function () {
  await this.page.goto('https://www.saucedemo.com/inventory.html');
});

Quando('visualizo o item desejado', async function () {
  const item = this.page.locator('[data-test="inventory-item-name"]', {hasText: 'Sauce Labs Backpack' });
  await expect(item).toBeVisible();

});

Quando('clico no item que desejo visualizar', async function () {
  const item = this.page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Backpack' });
  await item.click();
});

Quando('visualizo um item já adicionado ao carrinho', async function () {
  const item = this.page.locator('[data-test="inventory-item-name"]', {hasText: 'Sauce Labs Backpack' });
  await expect(item).toBeVisible();

  const remove  = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(remove).toBeVisible();
  const badge = this.page.locator('[data-test="shopping-cart-badge"]')
  const count = await badge.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});

Quando('clico no menu de filtros', async function () {
  await this.page.selectOption('[data-test="product-sort-container"]','lohi');
});

Quando('tenho um produto adicionado ao carrinho de compras', async function () {
  const badge = this.page.locator('[data-test="shopping-cart-badge"]');
  await expect(badge).toBeVisible();
});
 
E('clico em "Adicionar ao carrinho"', async function () {
  await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
});


E('clico em "Remover"', async function () {
  await this.page.click('[data-test="remove-sauce-labs-backpack"]')
});

E('clico em "Carrinho" no canto superior direito', async function () {
  await this.page.click('[data-test="shopping-cart-link"]')
});

Entao('o produto deve ser removido do carrinho de compras', async function () {
  const remove = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(remove).toHaveCount(0);
});

Entao('devo ser redirecionado para a página do item', async function () {
  await this.page.waitForURL('**/inventory-item.html?id=4');
  expect(this.page.url()).toContain('inventory-item.html?id=4');
});

Entao('os itens devem ser reorganizados de acordo com o filtro selecionado', async function () {
  const prices = await this.page.$$eval('.inventory_item_price', elements =>
  elements.map(el => parseFloat(el.textContent.replace('$', '')))
    );

    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);

});

Entao('devo ser redirecionado para a página do carrinho', async function () {
  await this.page.waitForURL('**/cart.html');
  expect(this.page.url()).toContain('cart.html');
});

Entao('o item deve ser adicionado ao carrinho de compras', async function () {
  const badge = this.page.locator('[data-test="shopping-cart-badge"]');
  await expect(badge).toBeVisible();
  const count = await badge.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});
