export function validarNumero (numero){
    return typeof numero === `number` && numero > 1 && numero % 1 === 0;
}

export function esPrimo(numero){
    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            return false;
        }
    }
    return true;
}
