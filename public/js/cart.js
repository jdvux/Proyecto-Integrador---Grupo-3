js:
window.addEventListener('load', () => {
    initializeCartButton();
  });
  
  function initializeCartButton() {
    const addToCartButton = document.querySelector('.add-to-cart button');
  
    if (addToCartButton) {
      addToCartButton.addEventListener('click', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('productId');
  
        addToCart(productId);
      });
    }
  
    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
      buyButton.addEventListener('click', e => { 
        e.preventDefault();
        purchase();
      });
    };
  };
  
  function increaseQuantity(productId) {
    const quantityElement = document.querySelector(`#quantity-selector-box-${productId} .quantity-text`);
    const totalPriceElement = document.getElementById('total-price');
    const price = parseInt(quantityElement.getAttribute('data-price'));
    
    let quantity = parseInt(quantityElement.textContent.split(':')[1].trim());
    quantity++;
    quantityElement.textContent = 'Cantidad: ' + quantity;
    
    const total = parseInt(totalPriceElement.textContent.substring(1)) + price;
    totalPriceElement.textContent = '$' + total;
  }
  
  function decreaseQuantity(productId) {
    const quantityElement = document.querySelector(`#quantity-selector-box-${productId} .quantity-text`);
    const totalPriceElement = document.getElementById('total-price');
    const price = parseInt(quantityElement.getAttribute('data-price'));
    
    let quantity = parseInt(quantityElement.textContent.split(':')[1].trim());
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = 'Cantidad: ' + quantity;
    
      const total = parseInt(totalPriceElement.textContent.substring(1)) - price;
      totalPriceElement.textContent = '$' + total;
    }
  }
  
  
  function updateTotal() {
    const totalPriceElements = document.querySelectorAll('.total-price');
    let total = 0;
  
    totalPriceElements.forEach((totalPriceElement) => {
      const price = parseInt(totalPriceElement.textContent.replace('$', ''));
      total += price;
    });
  
    const totalElement = document.querySelector('.total-price');
    totalElement.textContent = '$' + total;
  }
  
  function addToCart(productId) {
    // Enviar una solicitud HTTP (por ejemplo, mediante fetch) al servidor
    // para agregar el producto al carrito.
    // Puedes utilizar una ruta específica en tu servidor, por ejemplo: '/cart/add'
    fetch(`/cart/add?productId=${productId}`)
      .then(response => {
        if (response.ok) {
          // El producto se agregó correctamente al carrito, puedes redirigir al usuario al carrito
          window.location.href = '/products/productCart';
        } else {
          // Ocurrió un error al agregar el producto al carrito
          console.error('Error al agregar el producto al carrito');
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  }
  
  
  function purchase() {
    // Obtener el contenedor del carrito
  const cartContainer = document.querySelector('.item-row');
  // Verificar si el carrito está vacío
  if (cartContainer.children.length <= 1) {
    return; // Si el carrito está vacío, no hacer nada
  }
    // Realizar acciones necesarias para finalizar la compra
    // ...
    // Mostrar un mensaje de agradecimiento
    Swal.fire({
      title: "¡Gracias por tu compra!",
      icon: 'success',
      iconColor: '#353535',
      background: '#FFFFFA',
      confirmButtonColor: '#3C6E71',
      confirmButtonText: 'Continuar',
    }).then((result => {
      if (result.isConfirmed) {
        const form = document.getElementById('purchase-form');
        form.submit()
      };
    }));
};