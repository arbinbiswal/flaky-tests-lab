const cart = [];

function addItem(item) {
  cart.push(item);
}

function removeItem(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function getCart() {
  return cart;
}

function clearCart() {
  cart.length = 0;
}

module.exports = { addItem, removeItem, getCart, clearCart };
