let cart = [];
let total = 0;

function openCart() {
    document.getElementById('cart-sidebar').style.right = '0';
    document.getElementById('overlay').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-sidebar').style.right = '-300px';
    document.getElementById('overlay').style.display = 'none';
}

function addToCart(productName, productPrice) {
    // Añadir producto al carrito
    cart.push({ name: decodeURIComponent(productName), price: productPrice });
    total += productPrice;

    // Actualizar la vista del carrito
    updateCartView();
    openCart();
}

function updateCartView() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Limpiar la vista del carrito
    cartItems.innerHTML = '';

    // Añadir productos al carrito
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        
        // Botón para eliminar productos del carrito
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
    });

    // Actualizar precio total
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCartView();
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    // Mostrar mensaje de éxito
    alert('Compra finalizada con éxito.');

    // Vaciar el carrito después de finalizar la compra
    cart = [];
    total = 0;
    updateCartView();
    closeCart();
}

// Hacer las funciones accesibles globalmente
window.addToCart = addToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.finalizePurchase = finalizePurchase;
