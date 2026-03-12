import { Page } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async navigateToHome() {
    await this.page.goto('https://automationexercise.com/');
  }

  async openProducts() {
    await this.page.getByRole('link', { name: 'Products' }).click();
  }

  async viewProduct(index: number) {
    await this.page.getByRole('link', { name: 'View Product' }).nth(index).click();
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add to cart' }).click();
  }

  async viewCart() {
    await this.page.getByRole('link', { name: 'View Cart' }).click();
  }

  async proceedToCheckout() {
    await this.page.getByText('Proceed To Checkout').click();
  }

  async openLoginPage() {
    await this.page.getByRole('link', { name: 'Register / Login' }).click();
  }

  async login(email: string, password: string) {
    await this.page.locator('form')
      .filter({ hasText: 'Login' })
      .getByPlaceholder('Email Address')
      .fill(email);

    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async placeOrder() {
    await this.page.getByRole('link', { name: 'Place Order' }).click();
  }

  async fillPaymentDetails() {
    await this.page.locator('input[name="name_on_card"]').fill('Test');
    await this.page.locator('input[name="card_number"]').fill('42424242424242');
    await this.page.getByRole('textbox', { name: 'ex.' }).fill('123');
    await this.page.getByRole('textbox', { name: 'MM' }).fill('12');
    await this.page.getByRole('textbox', { name: 'YYYY' }).fill('2029');
  }

  async confirmOrder() {
    await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  }

  async continueAfterOrder() {
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}