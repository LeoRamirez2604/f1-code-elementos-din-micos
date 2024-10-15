// Seleccionar el contenedor donde se mostrarán los productos
const carritoContainer = document.createElement('div');
carritoContainer.classList.add('carrito-container');
document.body.appendChild(carritoContainer);

// Función para mostrar los productos del carrito
function mostrarProductosCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Limpiar el contenedor antes de mostrar los productos
    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    // Crear una lista de productos en el carrito
    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-carrito');
        productoDiv.innerHTML = `
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
        carritoContainer.appendChild(productoDiv);
    });
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    carritoContainer.innerHTML = ''; // Limpiar visualización
    alert("El carrito ha sido vaciado.");
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = carrito.reduce((acumulado, producto) => acumulado + (producto.precio * producto.cantidad), 0);
    alert(`El total de tu carrito es: $${total.toFixed(2)}`);
}

// Asignar eventos a los botones
document.getElementById('mostrar-carrito').addEventListener('click', mostrarProductosCarrito);
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
document.getElementById('calcular-total').addEventListener('click', calcularTotalCarrito);
