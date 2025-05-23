const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página de produtos', async function () {
  await this.page.goto('https://www.saucedemo.com/inventory.html');
});

When('clico no menu com três barras no canto superior esquerdo', async function () {
  await this.page.waitForSelector('#react-burger-menu-btn', { state: 'visible' });
  await this.page.click('#react-burger-menu-btn');
  
});


When('clico no botão de logout', async function () {
  await this.page.waitForSelector('[data-test="logout-sidebar-link"]', { state: 'visible' });
  await this.page.click('[data-test="logout-sidebar-link"]');
});

Then('devo ser redirecionado para a página de login', async function () {
  await this.page.waitForURL('https://www.saucedemo.com/');
  expect(this.page.url()).toContain('https://www.saucedemo.com/');
});
