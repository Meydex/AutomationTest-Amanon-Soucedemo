const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página de detalhes do item', async function () {
  await this.page.goto('https://www.saucedemo.com/inventory-item.html?id=4');
});

When('verifico as informações do item', async function () {
  await this.page.waitForURL('**/inventory-item.html?id=4');
  const container = this.page.locator('.inventory_details_desc_container');
  await expect(container).toBeVisible();

  await expect(container.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  
});

When('clico em "Voltar aos produtos"', async function () {
  await this.page.click('[data-test="back-to-products"]')
});

When('verifico que o item já está no carrinho', async function () {
  const removeButton = this.page.locator('[data-test="remove"]');
  await expect(removeButton).toHaveCount(1);

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
  const removeButton = this.page.locator('[data-test="remove"]');
  if (await removeButton.isVisible()) {
    await removeButton.click();
  } else {
    console.log('Item já foi removido ou não está no carrinho.');
  }
});

Then('o item deve ser adicionado ao carrinho de compras', async function () {
  await expect(this.page.locator('[data-test="remove"]')).toBeVisible();
});

Then('devo retornar à página de produtos', async function () {
  await this.page.waitForURL('**/inventory.html');
  expect(this.page.url()).toContain('inventory.html');
});

Then('o item deve ser removido do carrinho de compras', async function () {
  await expect(this.page.locator('[data-test="add-to-cart"]')).toBeVisible();
});
