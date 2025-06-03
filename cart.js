let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    id: 1,
    name: 'This is a toy',
    price: 500.00,
    image: './public/images/toys.jpg',
    quantity: 1
  },
  {
    id: 2,
    name: 'This is a book',
    price: 999.99,
    image: './public/images/books.jpeg',
    quantity: 1
  }
];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart_items');
  
  // Clear existing items
  cartItemsContainer.innerHTML = '';
  
  // If cart is empty
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <li class="text-center py-8 text-gray-500">
        Your cart is empty
      </li>
    `;
    return;
  }
  
  // Create cart items
  cart.forEach(item => {
    // Initialize quantity
    if (!item.quantity) {
      item.quantity = 1;
    }

    const cartItem = document.createElement('li');
    cartItem.id = `cart_item_${item.id}`;
    cartItem.className = 'flex items-stretch gap-4 border-t border-primary p-4';
    
    cartItem.innerHTML = `
      <img id="item_image" src="${item.image}" class="w-36 aspect-square" alt="${item.name}">
      <div class="flex flex-col justify-between py-2 relative w-full">
        <div>
          <h3 id="item_name" class="text-3xl font-semibold">${item.name}</h3>
          <p id="item_price" class="text-lg text-gray-500 font-medium">$${item.price.toFixed(2)}</p>
        </div>

        <div class="flex items-center gap-4">
          <button class="minus-btn" data-item-id="${item.id}">
            <img src="./public/icons/minus.svg" class="w-4 h-4" alt="decrease quantity">
          </button>
          <h5 class="font-semibold text-3xl item-quantity w-8 text-center">${item.quantity}</h5>
          <button class="plus-btn" data-item-id="${item.id}">
            <img src="./public/icons/plus.svg" class="w-4 h-4" alt="increase quantity">
          </button>
        </div>

        <button class="absolute right-0 bottom-0 del-btn flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md" data-item-id="${item.id}">
          <img src="./public/icons/delete.svg" class="w-5 h-5" alt="">
          Remove
        </button>
      </div>
    `;
    
    cartItemsContainer.appendChild(cartItem);
  });


  addQuantityControlListeners();
  addRemoveButtonListeners();
}

function addQuantityControlListeners() {
  // Plus button
  document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', function() {
      const itemId = parseInt(this.dataset.itemId);
      updateQuantity(itemId, 'increase');
    });
  });

  // Minus button
  document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', function() {
      const itemId = parseInt(this.dataset.itemId);
      updateQuantity(itemId, 'decrease');
    });
  });
}

function addRemoveButtonListeners() {
  document.querySelectorAll('.del-btn').forEach(button => {
    button.addEventListener('click', function() {
      const itemId = parseInt(this.dataset.itemId);
      removeFromCart(itemId);
    });
  });
}

function removeFromCart(itemId) {
  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex === -1) return;

  const itemElement = document.getElementById(`cart_item_${itemId}`);
  itemElement.style.transition = 'opacity 0.3s ease-out';
  itemElement.style.opacity = '0';

  setTimeout(() => {
    cart.splice(itemIndex, 1);
    saveCart();
    renderCartItems();
    updateCartTotals();
  }, 300);
}

function updateQuantity(itemId, action) {
  const cartItem = cart.find(item => item.id === itemId);
  if (!cartItem) return;

  if (action === 'increase') {
    cartItem.quantity++;
  } else if (action === 'decrease' && cartItem.quantity > 1) {
    cartItem.quantity--;
  }

  saveCart(); // Save to localStorage after updating quantity

  const quantityElement = document.querySelector(`#cart_item_${itemId} .item-quantity`);
  if (quantityElement) {
    quantityElement.textContent = cartItem.quantity;
  }

  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = cart.length > 0 ? 10.00 : 0; // Only add shipping if cart has items
  const total = subtotal + shipping;

  // Update the display
  document.getElementById('subtotal_value').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('shipping_value').textContent = `$${shipping.toFixed(2)}`;
  document.getElementById('total_value').textContent = `$${total.toFixed(2)}`;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
  updateCartTotals();
});