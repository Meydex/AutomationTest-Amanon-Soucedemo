const { Given, When, Then, E } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que estou na página Suas informações', async function () {
  await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
});

When('preencho primeiro nome, sobrenome e código postal válidos', async function () {
  await this.page.fill('#first-name','bob');
  await this.page.fill('#last-name','san');
  await this.page.fill('#postal-code','0000');
});

When('preencho nome, sobrenome e deixo o campo código postal vazio', async function () {
  await this.page.fill('#first-name','bob');
  await this.page.fill('#last-name','san');
  await this.page.fill('#postal-code','');
});

When('preencho sobrenome, código postal e deixo o campo nome vazio', async function () {
  await this.page.fill('#first-name','');
  await this.page.fill('#last-name','san');
  await this.page.fill('#postal-code','0000');
});

When('preencho nome, código postal e deixo o campo sobrenome vazio', async function () {
  await this.page.fill('#first-name','bob');
  await this.page.fill('#last-name','');
  await this.page.fill('#postal-code','0000');
});

When('deixo todos os campos vazios', async function () {
  await this.page.fill('#first-name','');
  await this.page.fill('#last-name','');
  await this.page.fill('#postal-code','');
});

When('clico em Continue', async function () {
  await this.page.click('[data-test="continue"]')
});

Then('devo ver a mensagem de erro Error: Postal Code is required', async function () {
   await expect(this.page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');
});

Then('devo ver a mensagem de erro Error: First Name is required', async function () {
   await expect(this.page.locator('[data-test="error"]')).toHaveText('Error: First Name is required');
});

Then('devo ver a mensagem de erro Error: Last Name is required', async function () {
  await expect(this.page.locator('[data-test="error"]')).toHaveText('Error: Last Name is required');
});


Then('sou redirecionado para a página de finalização da compra', async function () {
  await this.page.waitForURL('**/checkout-step-two.html');
  expect(this.page.url()).toContain('checkout-step-two.html');
});


