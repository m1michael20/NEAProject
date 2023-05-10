const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const cart = [];

function updateCart() {
  // Calculate cart subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  document.getElementById('subtotal-amount').textContent = `$ ${subtotal}`;

  // Calculate cart total (including shipping and discounts)
  const total = subtotal;
  document.getElementById('total-amount').textContent = `$ ${total}`;
}

function addItemToCart(item) {
  // Check if item already exists in cart
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  updateCart();
}

document.getElementById('apply-coupon').addEventListener('click', () => {
  // Apply coupon code and update cart
});

addItemToCart({ id: 1, name: 'Shirt', price: 20, quantity: 1 });
addItemToCart({ id: 2, name: 'Pants', price: 30, quantity: 2 });