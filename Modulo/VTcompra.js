export function calcularPrecio(cantidadProducto, precioProducto){
    return cantidadProducto * precioProducto;
}

export function calcularIva (precio){
    return precio * 0.19;
}

export function valorTotal(precio, calcularIva){
    return precio + calcularIva;
}

