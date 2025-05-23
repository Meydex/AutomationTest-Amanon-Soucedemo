const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página de login', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('eu digitar um nome de usuário e senha válidos', async function () {
  await this.page.fill('#user-name', 'standard_user');
  await this.page.fill('#password', 'secret_sauce');
});

When('eu digitar um nome de usuário válido e uma senha inválida', async function () {
  await this.page.fill('#user-name', 'standard_user');
  await this.page.fill('#password', 'senha_errada');
});

When('eu digitar um nome de usuário inválido e uma senha válida', async function () {
  await this.page.fill('#user-name', 'usuario_falso');
  await this.page.fill('#password', 'secret_sauce');
});

When('deixo os campos nome de usuário e senha vazios', async function () {
  await this.page.fill('#user-name', '');
  await this.page.fill('#password', '');
});

When('clico no botão de login', async function () {
  await this.page.click('#login-button');
});

Then('devo ser redirecionado para a página de inventário', async function () {
  await this.page.waitForURL('**/inventory.html');
  expect(this.page.url()).toContain('inventory.html');
});

Then('devo ver uma mensagem de erro', async function () {
  const error = await this.page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});

