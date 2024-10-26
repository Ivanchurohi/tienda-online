const carrito = [];
let total = 0;

function agregarACarrito(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    const nombre = producto.getAttribute("data-nombre");
    const precio = parseFloat(producto.getAttribute("data-precio"));

    carrito.push({ nombre, precio });
    total += precio;

    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = carrito.map(item => `<li>${item.nombre} - $${item.precio}</li>`).join("");
    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}