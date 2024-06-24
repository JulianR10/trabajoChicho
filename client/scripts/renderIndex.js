// Render de los productillos

fetch("http://localhost:3000/products/all")
    .then(response => response.json())
    .then(productos => {
        const front = document.getElementById("front");
        let contenido = "";
        productos.forEach(producto => {
            contenido += `
                <article class="container-producto">
                    <figure>
                        <img class="img-articulo" src="${producto.imgUrl}" alt="${producto.name}">
                    </figure>
                    <div class="info-producto">
                        <p class="nombre-articulo">${producto.name}</p>
                        <p class="desc-articulo">${producto.desc}</p>
                        <p class="precio-articulo">$${producto.price.toFixed(2)}</p>
                        <p class="stock-articulo">Stock: ${producto.stock}</p>
                        <button class="button-cart" onclick="addToCart('${encodeURIComponent(producto.name)}', ${producto.price})">Agregar al carrito</button>
                    </div>
                </article>`;
        });
        front.innerHTML = contenido;
    })
    .catch(error => console.error('Error fetching products:', error));

// Mostrar nombre de usuario
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userNameSpan = document.getElementById('user-name');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const adminBtn = document.getElementById('admin-btn');

    if (user) {
        userNameSpan.textContent = `${user.name} ${user.lastName}`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        userNameSpan.textContent = '';
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
    }
});
