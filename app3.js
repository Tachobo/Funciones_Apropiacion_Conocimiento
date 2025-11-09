import{
    calcularPrecio,
    calcularIva,
    valorTotal,
}from './Modulo/index.js';

function calcularCompra() {
    const cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos:"));
    const precioProducto = parseFloat(prompt("Ingrese el precio unitario:"));

    const precio = calcularPrecio(cantidadProducto, precioProducto);
    const iva = calcularIva(precio);
    const total = valorTotal(precio, iva);

    alert(`Subtotal: $${precio} IVA (19%): $${iva} Total a pagar: $${total}`);
}

calcularCompra()