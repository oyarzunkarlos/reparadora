// ====================
// REPARADORA Y ORTOPEDIA ALEMANA
// app.js - Lógica de la Tienda
// ====================

// Función para cargar productos desde JSON
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    // Si falla, mostrar un mensaje de error en el DOM
    document.getElementById('calzadoProducts').innerHTML = 
      '<p class="error-message">No se pudieron cargar los productos. Por favor, intente más tarde.</p>';
    document.getElementById('ortopediaProducts').innerHTML = 
      '<p class="error-message">No se pudieron cargar los productos. Por favor, intente más tarde.</p>';
    return [];
  }
}

// Función para renderizar productos en una sección
function renderProducts(products, containerId, category) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Filtrar productos por categoría
  const filteredProducts = products.filter(product => product.categoria === category);

  if (filteredProducts.length === 0) {
    container.innerHTML = '<p class="no-products">No hay productos disponibles en esta categoría.</p>';
    return;
  }

  const productCards = filteredProducts.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.imagenes[0] || 'https://via.placeholder.com/280x200?text=Producto'}" 
             alt="${product.nombre}" 
             onerror="this.src='https://via.placeholder.com/280x200?text=Imagen+No+Disponible'">
      </div>
      <div class="product-info">
        <h3>${product.nombre}</h3>
        <p>${product.descripcion}</p>
        <div class="product-price">$${product.precio.toLocaleString('es-CL')}</div>
        <div class="product-actions">
          <button class="btn-add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = productCards;
}

// Función para inicializar el carrito desde localStorage
function initCart() {
  let cart = JSON.parse(localStorage.getItem('reparadoraCart')) || [];
  updateCartUI(cart);
  return cart;
}

// Función para actualizar la UI del carrito
function updateCartUI(cart) {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartCount = document.querySelector('.cart-count');
  const checkoutButton = document.getElementById('checkoutButton');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío.</p>';
    cartTotal.textContent = '$0';
    cartCount.textContent = '0';
    checkoutButton.disabled = true;
    return;
  }

  // Calcular total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Renderizar items
  const cartItemsHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image"></div>
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-price">$${item.price.toLocaleString('es-CL')}</div>
        <div class="cart-item-quantity">
          <button class="decrease-qty" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase-qty" data-id="${item.id}">+</button>
        </div>
      </div>
    </div>
  `).join('');

  cartItems.innerHTML = cartItemsHTML;
  cartTotal.textContent = `$${total.toLocaleString('es-CL')}`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  checkoutButton.disabled = false;
}

// Función para agregar un producto al carrito
function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('reparadoraCart')) || [];
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }
  
  localStorage.setItem('reparadoraCart', JSON.stringify(cart));
  updateCartUI(cart);
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('reparadoraCart')) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('reparadoraCart', JSON.stringify(cart));
  updateCartUI(cart);
}

// Función para actualizar la cantidad de un producto
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) return;
  
  let cart = JSON.parse(localStorage.getItem('reparadoraCart')) || [];
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity = newQuantity;
  }
  
  localStorage.setItem('reparadoraCart', JSON.stringify(cart));
  updateCartUI(cart);
}

// Función para buscar productos
function searchProducts(query, products) {
  if (!query.trim()) {
    renderProducts(products, 'calzadoProducts', 'Calzado');
    renderProducts(products, 'ortopediaProducts', 'Ortopedia');
    return;
  }

  const searchTerm = query.toLowerCase();
  const filteredProducts = products.filter(product => 
    product.nombre.toLowerCase().includes(searchTerm) || 
    product.descripcion.toLowerCase().includes(searchTerm)
  );

  // Renderizar en ambas secciones
  const calzadoProducts = filteredProducts.filter(p => p.categoria === 'Calzado');
  const ortopediaProducts = filteredProducts.filter(p => p.categoria === 'Ortopedia');

  const calzadoContainer = document.getElementById('calzadoProducts');
  const ortopediaContainer = document.getElementById('ortopediaProducts');

  if (calzadoProducts.length > 0) {
    const productCards = calzadoProducts.map(product => `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.imagenes[0] || 'https://via.placeholder.com/280x200?text=Producto'}" 
               alt="${product.nombre}" 
               onerror="this.src='https://via.placeholder.com/280x200?text=Imagen+No+Disponible'">
        </div>
        <div class="product-info">
          <h3>${product.nombre}</h3>
          <p>${product.descripcion}</p>
          <div class="product-price">$${product.precio.toLocaleString('es-CL')}</div>
          <div class="product-actions">
            <button class="btn-add-to-cart" data-id="${product.id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `).join('');
    calzadoContainer.innerHTML = productCards;
  } else {
    calzadoContainer.innerHTML = '<p class="no-products">No se encontraron productos de calzado.</p>';
  }

  if (ortopediaProducts.length > 0) {
    const productCards = ortopediaProducts.map(product => `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.imagenes[0] || 'https://via.placeholder.com/280x200?text=Producto'}" 
               alt="${product.nombre}" 
               onerror="this.src='https://via.placeholder.com/280x200?text=Imagen+No+Disponible'">
        </div>
        <div class="product-info">
          <h3>${product.nombre}</h3>
          <p>${product.descripcion}</p>
          <div class="product-price">$${product.precio.toLocaleString('es-CL')}</div>
          <div class="product-actions">
            <button class="btn-add-to-cart" data-id="${product.id}">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `).join('');
    ortopediaContainer.innerHTML = productCards;
  } else {
    ortopediaContainer.innerHTML = '<p class="no-products">No se encontraron productos ortopédicos.</p>';
  }
}

// Inicialización de la aplicación
async function initApp() {
  // Cargar productos
  const products = await loadProducts();

  // Renderizar productos iniciales
  renderProducts(products, 'calzadoProducts', 'Calzado');
  renderProducts(products, 'ortopediaProducts', 'Ortopedia');

  // Inicializar carrito
  const cart = initCart();

  // Event Listeners
  
  // Toggle carrito
  document.getElementById('cartToggle').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.toggle('open');
  });

  document.getElementById('cartClose').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.remove('open');
  });

  // Agregar al carrito
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-to-cart')) {
      const productId = parseInt(e.target.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(productId, product.nombre, product.precio);
      }
    }
  });

  // Manejar eventos de cantidad en el carrito
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('decrease-qty')) {
      const productId = parseInt(e.target.getAttribute('data-id'));
      const cart = JSON.parse(localStorage.getItem('reparadoraCart')) || [];
      const item = cart.find(i => i.id === productId);
      if (item && item.quantity > 1) {
        updateQuantity(productId, item.quantity - 1);
      } else if (item) {
        removeFromCart(productId);
      }
    }

    if (e.target.classList.contains('increase-qty')) {
      const productId = parseInt(e.target.getAttribute('data-id'));
      const cart = JSON.parse(localStorage.getItem('reparadoraCart')) || [];
      const item = cart.find(i => i.id === productId);
      if (item) {
        updateQuantity(productId, item.quantity + 1);
      }
    }
  });

  // Buscar productos
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    searchProducts(searchInput.value, products);
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchProducts(searchInput.value, products);
    }
  });

  // Enviar formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
      contactForm.reset();
    });
  }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);