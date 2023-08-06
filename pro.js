// Fonction d'ajout au panier
const addToCartButtons = document.querySelectorAll('.buy-btn');
const cartItemsList = document.querySelector('.cart-items');
const totalSpan = document.getElementById('total');

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('.price').textContent.slice(1));
    
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${product.querySelector('img').src}" alt="${productName}">
      <div>
        <p>${productName}</p>
        <p>$${productPrice}</p>
      </div>
    `;

    cartItemsList.appendChild(cartItem);

    updateTotal(productPrice);
  });
});

// Fonction de mise à jour du total
function updateTotal(price) {
  const currentTotal = parseFloat(totalSpan.textContent);
  const newTotal = currentTotal + price;
  totalSpan.textContent = newTotal.toFixed(2);
}
