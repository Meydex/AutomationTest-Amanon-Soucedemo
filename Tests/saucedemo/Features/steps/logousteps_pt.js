const { Dado, Quando, Entao, E } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Dado('que estou na página de produtos', async function () {
  await this.page.goto('https://www.saucedemo.com/inventory.html');
});

Quando('clico no menu com três barras no canto superior esquerdo', async function () {
  await this.page.click('#react-burger-menu-btn');
  
});


E('clico no botão de logout', async function () {
  const item = this.page.locator('[data-test="logout-sidebar-link"]', { hasText: 'Logout' });
  await item.click();
});

Entao('Então devo ser redirecionado para a página de login', async function () {
  await this.page.waitForURL('https://www.saucedemo.com/');
  expect(this.page.url()).toContain('https://www.saucedemo.com/');
});
