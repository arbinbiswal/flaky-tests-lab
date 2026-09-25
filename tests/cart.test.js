const cart = require('../src/cart');

beforeEach(() => {
  cart.clearCart();
});

test('addItem adds to cart', () => {
  cart.addItem({ id: 1, name: 'Widget' });
  expect(cart.getCart().length).toBe(1);
});

test('cart starts empty', () => {
  expect(cart.getCart().length).toBe(0);
});

test('removeItem removes from cart', () => {
  cart.addItem({ id: 2, name: 'Gadget' });
  cart.removeItem(2);
  expect(cart.getCart().length).toBe(0);
});
