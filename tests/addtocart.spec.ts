import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../test-data/productdata';

test('Complete order flow', async ({ page }) => {

  const checkout = new CheckoutPage(page);

  await checkout.navigateToHome();

  await checkout.openProducts();
  await checkout.viewProduct(1);
  await checkout.addToCart();

  await checkout.viewCart();
  await checkout.proceedToCheckout();

  await checkout.openLoginPage();
  await checkout.login('disha@yopmail.com', 'Disha@123');

  await checkout.viewProduct(2);
  await checkout.addToCart();

  await checkout.viewCart();
  await checkout.proceedToCheckout();

  await checkout.placeOrder();
  await checkout.fillPaymentDetails();
  await checkout.confirmOrder();

  await checkout.continueAfterOrder();
});