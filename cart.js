function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  const totalElem = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);
  });

  totalElem.textContent = `Total: $${total}`;
}

function clearCart() {
  localStorage.removeItem('cart');
  displayCart();
}

if (document.getElementById('cart-items')) {
  displayCart();
}
