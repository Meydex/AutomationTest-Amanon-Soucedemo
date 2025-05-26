const {After, Before } = require('@cucumber/cucumber');


Before(async function ({ pickle }) {
  await this.launchBrowser();
  const tags = pickle.tags.map(tag => tag.name);

  if (
    tags.includes('@login') ||
    tags.includes('@carrinho') ||
    tags.includes('@checkout') ||
    tags.includes('@requires_logout') ||
    tags.includes('@requires_checkout_step1') ||
    tags.includes('@requires_checkout_step2')
  ) if (tags.includes('@login')) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');
    await this.page.click('#login-button');
    await this.page.waitForURL('**/inventory.html');
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  if (tags.includes('@requires_cart')) {
    await this.page.goto('https://www.saucedemo.com/cart.html');
    await this.page.waitForURL('**/cart.html');
  }
  if (tags.includes('@requires_logout')) {
    await this.page.click('#react-burger-menu-btn');
    const item = this.page.locator('[data-test="logout-sidebar-link"]', { hasText: 'Logout' });
    await item.click();
    await this.page.waitForURL('https://www.saucedemo.com');
  }

  if (tags.includes('@requires_checkout_step1')) {
    await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
    await this.page.fill('#first-name', 'bob');
    await this.page.fill('#last-name', 'san');
    await this.page.fill('#postal-code', '0000');
  }

  if (tags.includes('@requires_checkout_step2')) {
    await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
  }
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});