const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página de produtos', async function () {
  await this.page.goto('https://www.saucedemo.com/inventory.html');
});

When('visualizo o item desejado', async function () {
  const item = this.page.locator('[data-test="inventory-item-name"]', {hasText: 'Sauce Labs Backpack' });
  await expect(item).toBeVisible();

});

When('clico no item que desejo visualizar', async function () {
  const item = this.page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Backpack' });
  await item.click();
});

When('visualizo um item já adicionado ao carrinho', async function () {
  const item = this.page.locator('[data-test="inventory-item-name"]', {hasText: 'Sauce Labs Backpack' });
  await expect(item).toBeVisible();

  const remove  = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(remove).toBeVisible();
  const badge = this.page.locator('[data-test="shopping-cart-badge"]')
  const count = await badge.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});

When('clico no menu de filtros', async function () {
  await this.page.selectOption('[data-test="product-sort-container"]','lohi');
});

When('tenho um produto adicionado ao carrinho de compras', async function () {
  const badge = this.page.locator('[data-test="shopping-cart-badge"]');
  await expect(badge).toBeVisible();
});
 
When('clico em "Adicionar ao carrinho"', async function () {
  const addButton = this.page.locator('[data-test="add-to-cart"]');
  if (await addButton.isVisible()) {
    await addButton.click();
  } else {
    console.log('Item já está no carrinho. Ignorando clique em adicionar.');
  }
});


When('clico em "Remover"', async function () {
  await this.page.click('[data-test="remove-sauce-labs-backpack"]')
});

When('clico em "Carrinho" no canto superior direito', async function () {
  await this.page.click('[data-test="shopping-cart-link"]')
});

Then('o item deve ser removido do carrinho de compras', async function () {
  const remove = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(remove).toHaveCount(0);
});

Then('devo ser redirecionado para a página do item', async function () {
  await this.page.waitForURL('**/inventory-item.html?id=4');
  expect(this.page.url()).toContain('inventory-item.html?id=4');
});

Then('os itens devem ser reorganizados de acordo com o filtro selecionado', async function () {
  const prices = await this.page.$$eval('.inventory_item_price', elements =>
  elements.map(el => parseFloat(el.textContent.replace('$', '')))
    );

    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);

});

Then('devo ser redirecionado para a página do carrinho', async function () {
  await this.page.waitForURL('**/cart.html');
  expect(this.page.url()).toContain('cart.html');
});

Then('o item deve ser adicionado ao carrinho de compras', async function () {
  const badge = this.page.locator('[data-test="shopping-cart-badge"]');
  await expect(badge).toBeVisible();
  const count = await badge.textContent();
  expect(parseInt(count)).toBeGreaterThan(0);
});
